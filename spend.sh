#!/bin/bash

fingerprint=1377940310

# amount=0.000000000002
puzzle=$(run password_puzzle.clvm)
echo puzzle: $puzzle
opcresult=$(opc -H "$puzzle")
puzzle_hash=$(echo $opcresult | awk '{ print $1 }')
puzzle_hex=$(echo $opcresult | awk '{ print $2 }')
# puzzle_hash=$(echo $opcresult | head -n1)
# puzzle_hex=$(echo $opcresult | tail -n1)

puzzle_request=$(cat <<EOF
    {"puzzle_hash":"$puzzle_hash", "include_spent_coins": false}
EOF
)

records=$(curl --insecure -s \
     --cert ~/.chia/standalone_wallet/config/ssl/full_node/private_full_node.crt \
     --key ~/.chia/standalone_wallet/config/ssl/full_node/private_full_node.key \
     -d "$puzzle_request" \
     -H "Content-Type: application/json" \
     -X POST https://localhost:8555/get_coin_records_by_puzzle_hash)

# echo $records | python -m json.tool
# echo $records | ./jiq_linux_amd64
amount=$(echo $records | jq '.coin_records[0].coin.amount')
parent_coin_info=$(echo $records | jq '.coin_records[0].coin.parent_coin_info')
coin_puzzle_hash=$(echo $records | jq '.coin_records[0].coin.puzzle_hash')


tgt_address=$(chia keys show | grep -A4 1377940310 | grep "First wallet address" | awk -F': ' '{ print $2 }')
tgt_hash=$(cdv decode $tgt_address)
solution="(hello 0x$tgt_hash $amount)"
echo solution: $solution
solution_hex=$(opc "$solution")
bundle=$(cat <<EOF
{
    "spend_bundle": {
        "aggregated_signature": "0xc00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "coin_spends": [
            {
                "coin": {
                    "amount": $amount,
                    "parent_coin_info": $parent_coin_info,
                    "puzzle_hash": $coin_puzzle_hash
                },
                "puzzle_reveal": "$puzzle_hex",
                "solution": "$solution_hex"
            }
        ]
    }
}
EOF
)

FILENAME=temp_test.json
echo $bundle>$FILENAME
cdv inspect spendbundles $FILENAME -db
rm $FILENAME

# exit;
curl --insecure -s \
     --cert ~/.chia/standalone_wallet/config/ssl/full_node/private_full_node.crt \
     --key ~/.chia/standalone_wallet/config/ssl/full_node/private_full_node.key \
     -d "$bundle" \
     -H "Content-Type: application/json" \
     -X POST https://localhost:8555/push_tx
