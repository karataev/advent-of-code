const Assembly = require('./Assembly');
const data = require('./day18-data');

let assembly = new Assembly();
let res = assembly.sequence(data);
console.log(res);
