class Assembly {

  constructor() {
    this.memory = {};
    this.frequency = 0;
  }

  sequence(str) {
    let commands = str.split('\n');
    let i = 0;
    while (true) {
      let cmd = commands[i];
      if (!cmd) return;
      let result = this.execute(cmd);
      if (result && result.cmd === 'break') return result.value;
      i = result && result.cmd === 'jump' ? i + result.value : i + 1;
    }
  }

  execute(command) {
    let parts = command.split(' ');
    let cmdName = parts[0];
    switch(cmdName) {
      case 'set':
        this.set(parts[1], parts[2]);
        break;
      case 'add':
        this.add(parts[1], parts[2]);
        break;
      case 'mul':
        this.mult(parts[1], parts[2]);
        break;
      case 'mod':
        this.mod(parts[1], parts[2]);
        break;
      case 'snd':
        this.snd(parts[1]);
        break;
      case 'jgz':
        return this.jgz(parts[1], parts[2]);
      case 'rcv':
        return this.recover(parts[1]);
    }
  }

  getValue(value) {
    if (isNaN(value)) { // letter
      if (this.memory[value] === undefined) this.memory[value] = 0;
      return this.memory[value];
    } else {
      return Number(value);
    }
  }

  set(register, value) {
    this.memory[register] = this.getValue(value);
  }

  add(register, value) {
    if (this.memory[register] === undefined) this.memory[register] = 0;
    this.memory[register] += this.getValue(value);
  }

  mult(register, value) {
    if (this.memory[register] === undefined) this.memory[register] = 0;
    this.memory[register] *= this.getValue(value);
  }

  mod(register, value) {
    if (this.memory[register] === undefined) this.memory[register] = 0;
    this.memory[register] %= this.getValue(value);
  }

  snd(value) {
    this.frequency = this.getValue(value);
  }

  recover(value) {
    value = this.getValue(value);
    return value === 0 ? undefined : {cmd: 'break', value: this.frequency};
  }

  jgz(register, value) {
    value = this.getValue(value);
    return this.memory[register] === 0 ? undefined : {cmd: 'jump', value};
  }

  get(register) {
    return this.memory[register];
  }
}

module.exports = Assembly;