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

  data.map(([first, second, char, password]) => {
    const destructedPassword = password.split('');
    const posFirst = destructedPassword[first - 1] === char;
    const posSecond = destructedPassword[second - 1] === char;

    if ((posFirst && !posSecond) || (!posFirst && posSecond)) {
      validPasswords++;
    }
  });

  console.log('No of valid passwords:', validPasswords); // eslint-disable-line no-console
});
