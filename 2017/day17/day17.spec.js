const Spinlock = require('./Spinlock');

test('it should solve day1 example', () => {
  let spinlock = new Spinlock(3);
  for (let i = 0; i < 2017; i++) {
    spinlock.iterate();
  }
  expect(spinlock.state[spinlock.currentPos + 1]).toEqual(638);
});

test('it should solve day1', () => {
  let spinlock = new Spinlock(369);
  for (let i = 0; i < 2017; i++) {
    spinlock.iterate();
  }
  expect(spinlock.state[spinlock.currentPos + 1]).toEqual(1547);
});
