const Generator = require('./Generator');


let genA = new Generator({factor: 16807, startValue: 634, mult: 4});
let genB = new Generator({factor: 48271, startValue: 301, mult: 8});
// let genA = new Generator({factor: 16807, startValue: 65, mult: 4});
// let genB = new Generator({factor: 48271, startValue: 8921, mult: 8});

let matches = 0;
for (let i = 0; i < 5000000; i++) {
  genA.next();
  genB.next();
  if(genA.toBin16() === genB.toBin16()) matches++;
}

console.log('matches', matches);

// console.log(genA.toBin());
// console.log(genA.toBin16());
