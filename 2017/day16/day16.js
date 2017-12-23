const Dance = require('./Dance');


function solve() {
  let data = require('./day16-data');
  let dance = new Dance('abcdefghijklmnop');
  let commands = data.split(',');

  console.log(0, dance.program);
  for (let i = 0; i < 100; i++) {
    commands.forEach(item => dance.execute(item));
    console.log(i + 1, dance.program);
  }
  // program repeats every 24 steps.
}

solve();