const Navigator = require('./Navigator');
const data = require('./day19-data');

let navigator = new Navigator(data);
navigator.start();
do {
  if (navigator.step()) break;
} while (true);

console.log('path', navigator.path);
console.log('steps', navigator.steps);