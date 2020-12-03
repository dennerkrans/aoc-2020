#!/bin/bash
DAY_NO=$1

if [ -d "./day-$DAY_NO" ]
then
  echo "Day $DAY_NO already exists"
else
  mkdir day-"$DAY_NO"
  cd day-"$DAY_NO"
  touch "$DAY_NO"-1.js
  touch "$DAY_NO"-2.js
  echo "const utils = require('../utils.js');
  utils.readFileToArray('./day-$DAY_NO/input', (data) => {
    data = data.map((d) => parseInt(d));
  });" | tee "$DAY_NO"-1.js > "$DAY_NO"-2.js
  touch input
  echo "Puzzle: https://adventofcode.com/2020/day/$DAY_NO"
  echo "Input: https://adventofcode.com/2020/day/$DAY_NO/input"
fi