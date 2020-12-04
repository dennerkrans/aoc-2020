const fs = require('fs');
const readline = require('readline');

function readFileToArray(
  file,
  callback = (arr) => {
    console.log(arr);
  }
) {
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
}

function readFileToString(path, callback) {
  try {
    const filename = require.resolve(path);
    fs.readFile(filename, 'utf8', callback);
  } catch (e) {
    callback(e);
  }
}

module.exports = {
  readFileToArray,
  readFileToString,
};
