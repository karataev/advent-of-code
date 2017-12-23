
class Dance {

  constructor(program) {
    this.program = program;
  }

  execute(str) {
    const cmd = str.slice(0, 1);
    const args = str.slice(1);
    let parts;
    switch(cmd) {
      case 's':
        this.spin(Number(args));
        break;
      case 'x':
        parts = args
          .split('/')
          .map(s => Number(s));
        this.exchange(parts[0], parts[1]);
        break;
      case 'p':
        parts = args.split('/');
        this.partner(parts[0], parts[1]);
        break;
    }

  }

  spin(x) {
    let p = this.program;
    this.program = p.slice(p.length - x) + p.slice(0, p.length - x);
  }

  exchange(i1, i2) {
    let chars = this.program.split('');
    let temp = this.program[i1];
    chars[i1] = chars[i2];
    chars[i2] = temp;
    this.program = chars.join('');
  }

  partner(p1, p2) {
    const i1 = this.program.indexOf(p1);
    const i2 = this.program.indexOf(p2);
    this.exchange(i1, i2);
  }
}

module.exports = Dance;