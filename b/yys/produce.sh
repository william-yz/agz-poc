#!/bin/bash
echo "start produce"
cd meta-tools
node produceAll
rm -dr ../src/models/cards
mv class ../src/models/cards
