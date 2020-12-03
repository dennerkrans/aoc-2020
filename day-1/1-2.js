const utils = require('../utils.js');

utils.readFileToArray('./day-1/input', (data) => {
  data = data.map((d) => parseInt(d));
  data.map((p, pIndex) => {
    data.map((s, sIndex) => {
      data.map((t, tIndex) => {
        if (p + s + t === 2020) {
          console.log('Result: ', p * s * t);
          process.exit(-1);
        }
        console.log(`At: ${pIndex}:${sIndex}:${tIndex}`);
      });
    });
  });
});
