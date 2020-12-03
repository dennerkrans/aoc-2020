const utils = require('../utils.js');

const treeCounter = (line, x, y) => (line.split('')[y * x] === '#' ? 1 : 0);

utils.readFileToArray('./day-3/input', (data) => {
  let trees = { a: 0, b: 0, c: 0, d: 0, e: 0 };
  let eXPos = 1;
  data = data.map((d) => d.repeat(data.length));
  data.map((d, i) => {
    if (i === 0) return;
    trees.a = trees.a + treeCounter(d, 1, i);
    trees.b = trees.b + treeCounter(d, 3, i);
    trees.c = trees.c + treeCounter(d, 5, i);
    trees.d = trees.d + treeCounter(d, 7, i);
    if (i % 2 === 0) {
      trees.e = d.split('')[eXPos] === '#' ? trees.e + 1 : trees.e;
      eXPos++;
    }
  });
  console.log(
    'Multiplication of trees routes: ',
    Object.values(trees).reduce((prev, curr) => prev * curr)
  );
});
