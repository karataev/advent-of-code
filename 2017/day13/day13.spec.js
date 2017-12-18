const Scanner = require('./Scanner');

test('skip steps should work perfectly', () => {
  let s1 = new Scanner(0, 5);
  let s2 = new Scanner(0, 5);
  const steps = 10;
  s1.skipSteps(steps);
  for (let i = 0; i < steps; i++) {
    s2.nextStep();
  }

  expect(s1.index).toEqual(s2.index);
  expect(s1.step).toEqual(s2.step);

});
