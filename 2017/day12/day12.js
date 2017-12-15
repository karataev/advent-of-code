const fooData = require('./day12-data-foo');
const data = require('./day12-data');

function parseData(data) {
  let result = {};
  data
    .split('\n')
    .forEach(row => {
      const parts = row.split(' <-> ');
      const rootNode = parts[0];
      const nodes = parts[1].split(', ');
      result[rootNode] = nodes;
    });
  return result;
}

function solve(data) {
  const obj = parseData(data);

  function visitNode(i) {
    if (visited.indexOf(i) > -1) return;

    visited.push(i);
    const arr = obj[i];
    arr.forEach(j => {
      if (result.indexOf(j) === -1) result.push(j);
      visitNode(j);
    })
  }

  let result = [];
  let visited = [];
  visitNode(0);
  console.log(obj);
  console.log(result);
  console.log(result.length);
}

solve(data);

