const utils = require('../utils.js');

utils.readFileToArray('./day-3/input', (data) => {
  let trees = 0;
  data = data.map((d) => d.repeat(data.length));
  data.map((d, i) => {
    if (i === 0) return;
    if (d.split('')[i * 3] === '#') {
      trees++;
    }
  });
  console.log('No of trees: ', trees); // eslint-disable-line no-console
});
