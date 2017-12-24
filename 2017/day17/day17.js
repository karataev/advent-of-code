const Spinlock = require('./Spinlock');
const CycleList = require('./CycleList');

function solve() {
  let spinlock = new Spinlock(369);
  for (let i = 0; i < 100000; i++) {
    spinlock.iterate();
  }
  console.log(spinlock.state.slice(0, 10));
  let index = spinlock.state.indexOf(0);
  console.log(spinlock.state[index + 1]);
}

function test() {
  let list = new CycleList();
  list.insertNode(0);
  list.insertNode(1);
  list.insertNode(2);
  list.insertNode(3);
  list.print();
}

// solve();


test();