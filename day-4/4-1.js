const utils = require('../utils.js');

utils.readFileToString('./day-4/input', (err, str) => {
  if (err) {
    console.log(err);
    process.exit(-1);
  }

  const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']; // 'cid' is optional
  const validCredentialsNo = str
    .split(/\n\s*\n/)
    .map((cred) => cred.replace(/(?:\r\n|\r|\n)/g, ' '))
    .map((cred) => required.every((r) => cred.includes(r)))
    .filter((cred) => cred).length;

  console.log('No of valid credentials: ', validCredentialsNo);
});
