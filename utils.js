const fs = require('fs');
const readline = require('readline');

const readFileToArray = (
  file,
  callback = (arr) => {
    console.log(arr);
  }
) => {
  const arr = new Array();
  readline
    .createInterface({
      input: fs.createReadStream(file),
      terminal: false,
    })
    .on('line', (line) => {
      arr.push(line);
    })
    .on('close', () => {
      callback(arr);
    });
};

module.exports = {
  readFileToArray,
};
