import asyncio
import utils

from blspy import (PrivateKey, AugSchemeMPL, G2Element)
from cdv.test import Network, Wallet

from cdv.util.load_clvm import load_clvm

from chia.consensus.default_constants import DEFAULT_CONSTANTS
from chia.types.blockchain_format.program import Program
from chia.types.coin_spend import CoinSpend
from chia.types.condition_opcodes import ConditionOpcode
from chia.types.spend_bundle import SpendBundle
from chia.util.hash import std_hash
from chia.types.blockchain_format.program import Program, SerializedProgram

network: Network = asyncio.run(Network.create())
asyncio.run(network.farm_block())

alice: Wallet = network.make_wallet("alice")
bob: Wallet = network.make_wallet("bob")

asyncio.run(network.farm_block(farmer=alice))
print(f'alice balance:\t{alice.balance()}')
print(f'bob balance:\t{bob.balance()}')

alice_coins = alice.usable_coins 
print(f'alice coins:')
for k, c in alice_coins.items():
    print(k)
    utils.print_json(c.to_json_dict())

clvm_hex=open("popchia.clsp.hex", "r").read()
clvm_blob = bytes.fromhex(clvm_hex)
MOD = Program.from_bytes(bytes( SerializedProgram.from_bytes(clvm_blob)))
# MOD = load_clvm("popchia.clsp",
#     package_or_requirement=__name__,
#     search_paths=["./"]
# )

# create a smart coin and curry in alice's pk
amt = 1_000
password=alice.pk()
alice_mod = MOD.curry(password)
alice_coin = asyncio.run(
    alice.launch_smart_coin(
        alice_mod,
        amt=amt
    )
)

print(f'alice smart coin:\t{alice_coin}')

# popchia_genesis
# popchia_puzhash
# password
# consumer_puzhash
# popchia_amount
# consumer_amount
# coin_id
amount = alice_coin.parent_coin_info & 0x00000000000000000000000000000000000000000000000000000000000000ff
solution = Program.to([
    1, # (mod conditions conditions)
    [
        alice_coin.puzzle_hash(),
        alice_coin.create_standard_spend(),
        password,
        bob.puzzle_hash(),
        0,
        amount,
        alice_coin.parent_coin_info,
    ]
])

# create a spend bundle with alice's signature
spend = CoinSpend(
    alice_coin.as_coin(),
    alice_mod,
    solution 
)

message: bytes = Program.to(1).get_tree_hash() # (mod conditions conditions)
alice_sk: PrivateKey = alice.pk_to_sk(alice.pk())
sig: G2Element = AugSchemeMPL.sign(
    alice_sk,
    message
    + alice_coin.name()
    + DEFAULT_CONSTANTS.AGG_SIG_ME_ADDITIONAL_DATA,
)

spend_bundle = SpendBundle([spend], sig)

print(f'\npush spend bundle:\n{spend_bundle}\n')
asyncio.run(network.push_tx(spend_bundle))
print(f'alice balance:\t{alice.balance()}')
print(f'bob balance:\t{bob.balance()}')

alice_coin_id = alice_coin.name()
alice_coin_record = asyncio.run(
    network.sim_client.get_coin_record_by_name(alice_coin_id))
print(alice_coin_record)

coin_spend: CoinSpend = asyncio.run(
    network.sim_client.get_puzzle_and_solution(alice_coin_id, alice_coin_record.spent_block_index))
print(coin_spend.puzzle_reveal)

asyncio.run(network.close())

