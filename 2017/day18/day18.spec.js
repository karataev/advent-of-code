const Assembly = require('./Assembly');

test('should set register value', () => {
  let assembly = new Assembly();
  assembly.set('a', 1);
  expect(assembly.get('a')).toEqual(1);
});

test('should execute set instruction', () => {
  let assembly = new Assembly();
  assembly.execute('set a 5');
  expect(assembly.get('a')).toEqual(5);
});

test('should add value to register', () => {
  let assembly = new Assembly();
  assembly.set('a', 1);
  assembly.add('a', 2);
  expect(assembly.get('a')).toEqual(3);
});

test('should add register to register', () => {
  let assembly = new Assembly();
  assembly.set('a', 5);
  assembly.set('b', 6);
  assembly.add('a', 'b');
  expect(assembly.get('a')).toEqual(11);
});

test('should multiply register value', () => {
  let assembly = new Assembly();
  assembly.set('a', 2);
  assembly.mult('a', 4);
  expect(assembly.get('a')).toEqual(8);
});

test('should square register', () => {
  let assembly = new Assembly();
  assembly.set('a', 5);
  assembly.mult('a', 'a');
  expect(assembly.get('a')).toEqual(25);
});

test('should mod register', () => {
  let assembly = new Assembly();
  assembly.set('a', 9);
  assembly.mod('a', 5);
  expect(assembly.get('a')).toEqual(4);
});

test('should play', () => {
  let assembly = new Assembly();
  assembly.snd(10);
  expect(assembly.frequency).toEqual(10);
});

test('should recover', () => {
  let assembly = new Assembly();
  assembly.snd(9);
  expect(assembly.recover(5).value).toEqual(9);
});

test('should execute sequence', () => {
  let assembly = new Assembly();
  let data = `set a 1
add a 2
mul a a
mod a 5`;
  assembly.sequence(data);
  expect(assembly.get('a')).toEqual(4);
});

test('should jump if greater than zero', () => {
  let assembly = new Assembly();
  let data = `set a 5
snd 10
jgz a 2
snd 20
rcv a`;
  let result = assembly.sequence(data);
  expect(result).toEqual(10);
});

test('should solve day1 test', () => {
  let assembly = new Assembly();
  let data = `set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`;
  let result = assembly.sequence(data);
  expect(result).toEqual(4);
});

test('should mul without NaN', () => {
  let assembly = new Assembly();
  assembly.mult('p', 17);
  expect(assembly.get('p')).toEqual(0);
});
