const utils = require('../utils.js');

utils.readFileToArray('./day-1/input', (data) => {
  data = data.map((d) => parseInt(d));
  let startIndex = 0;
  let currentIndex = 0;
  let target = 0;
  while (target !== 2020) {
    if (startIndex === currentIndex) {
      currentIndex++;
    } else if (currentIndex === data.length - 1) {
      startIndex++;
      currentIndex = 0;
    } else {
      target = data[startIndex] + data[currentIndex];
      target !== 2020 && currentIndex++;
    }
  }

  const sum = data[startIndex] * data[currentIndex];
  console.log('Sum: ', sum);
});
