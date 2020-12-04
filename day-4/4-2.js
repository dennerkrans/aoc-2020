const utils = require('../utils.js');

utils.readFileToString('./day-4/input', (err, input) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }

  const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

  const rules = {
    byr: /^(19[2-9]\d)|(200[0-2])$/,
    iyr: /^20((1\d)|(20))$/,
    eyr: /^20((2\d)|(30))$/,
    hgt: /^((1[5-8]\dcm)|(19[0-3]cm)|((59)|(6\d)|(7[0-6]))in)$/,
    hcl: /^#[\da-f]{6}$/,
    ecl: /^(amb)|(blu)|(brn)|(gry)|(grn)|(hzl)|(oth)$/,
    pid: /^\d{9}$/,
    cid: /./,
  };

  const count = input.split(/\n\s*\n/).filter((line) => {
    const keyValue = line
      .split(/[\s\n]/)
      .map((keyValue) => keyValue.split(':'));
    const fields = new Map(keyValue); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

    // Check if required fields are available
    if (!required.every((x) => fields.has(x))) return false;

    // Each field must be valid
    return keyValue.every(([key, value]) => value.match(rules[key]));
  }).length;

  console.log('Valid count: ', count);
});
