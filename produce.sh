#!/bin/bash

puzzle=$(run password_puzzle.clvm)
echo puzzle: $puzzle

opcresult=$(opc -H "$puzzle")
hash=$(echo $opcresult | head -n1)
puzzle_hex=$(echo $opcresult | tail -n1)

echo hash: $hash

address=$(cdv encode $hash --prefix txch)

echo address: $address

exit

sendresult=$(chia wallet send -a 0.000000000005 -t $address)
SENDTX=`echo $sendresult |grep "to get status" |awk '{print $(NF-3)}'`

echo sent tx: chia wallet get_trasaction -tx $SENDTX
