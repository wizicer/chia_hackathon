#!/bin/bash

fingerprint=1377940310
puzzle=$(run password_puzzle.clvm)
echo puzzle: $puzzle

opcresult=$(opc -H "$puzzle")
puzzle_hash=$(echo $opcresult | awk '{ print $1 }')
puzzle_hex=$(echo $opcresult | awk '{ print $2 }')
# puzzle_hash=$(echo $opcresult | head -n1)
# puzzle_hex=$(echo $opcresult | tail -n1)

echo hash: $puzzle_hash

address=$(cdv encode $puzzle_hash --prefix txch)

echo address: $address

# exit

sendresult=$(chia wallet send -f $fingerprint -a 0.000000000002 -t $address)
SENDTX=`echo $sendresult |grep "to get status" |awk '{print $(NF-3)}'`

echo sent tx: chia wallet get_transaction -f $fingerprint -tx $SENDTX
