class Scanner {

  constructor(depth, range) {
    this.depth = depth;
    this.range = range;

    this.reset();
  }

  reset() {
    this.index = 0;
    this.step = 1;
  }

  updateDirection() {
    if (this.index === this.range - 1) this.step = -1;
    else if (this.index === 0) this.step = 1;
  }

  nextStep() {
    this.index += this.step;
    this.updateDirection();
  }

  skipSteps(amount) {
    let mod = amount % (this.range - 1);
    let div = Math.floor(amount / (this.range - 1));
    if (div % 2 === 1) {
      this.step = -1;
      this.index = this.range - 1 - mod;
    }
    if (div % 2 === 0) {
      this.index = mod;
      this.step = 1;
    }
    this.updateDirection();
  }

  isOnStart() {
    return this.index === 0;
  }

  print() {
    let str = `${this.depth}: `;
    for (let i = 0; i < this.range; i++) {
      str += this.index === i ? '[S]' : '[ ]';
    }
    console.log(str);
  }
}

module.exports = Scanner;