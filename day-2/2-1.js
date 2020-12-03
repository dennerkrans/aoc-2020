const utils = require('../utils.js');

utils.readFileToArray('./day-2/input', (data) => {
  let validPasswords = 0;
  data = data.map((d) => {
    return d
      .split('-')
      .join(',')
      .split(':')
      .join(',')
      .split(' ')
      .join(',')
      .split(',')
      .filter((item) => item != '')
      .map((item) => {
        if (/\d/.test(item)) {
          return parseInt(item);
        }
        return item;
      });
  });

  data.map(([min, max, char, password]) => {
    const re = new RegExp(`[^${char}]`, 'g');
    const instances = password.replace(re, '').length;
    if (instances >= min && instances <= max) {
      validPasswords++;
    }
  });

  console.log('No of valid passwords:', validPasswords); // eslint-disable-line no-console
});
