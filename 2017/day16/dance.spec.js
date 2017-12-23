const Dance = require('./Dance');
const DanceFast = require('./DanceFast');

test('should spin', () => {
  let dance = new Dance('abcde');
  dance.spin(1);
  expect(dance.program).toEqual('eabcd');
});

test('should exchange', () => {
  let dance = new Dance('abcde');
  dance.exchange(3, 4);
  expect(dance.program).toEqual('abced');
});

test('should partner', () => {
  let dance = new Dance('abcde');
  dance.partner('b', 'd');
  expect(dance.program).toEqual('adcbe');
});

test('should pass example case', () => {
  let dance = new Dance('abcde');
  dance.execute('s1');
  dance.execute('x3/4');
  dance.execute('pe/b');
  expect(dance.program).toEqual('baedc');
});

test('should solve day1', () => {
  let dance = new Dance('abcdefghijklmnop');
  let data = require('./day16-data');
  let commands = data.split(',');
  commands.forEach(command => dance.execute(command));
  expect(dance.program).toEqual('fgmobeaijhdpkcln');
});
