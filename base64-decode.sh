#!/bin/bash
read encode times

# set n to 1
n=1

# while loop
while [ $n -le $times ]
do
    encode=`echo $encode | base64 -D`
    n=$(( n+1 ))
done

echo $encode
