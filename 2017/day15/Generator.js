function leftPad(str) {
  let amount = 32 - str.length;
  let zeros = '';
  for (let i = 0; i < amount; i++) {
    zeros += '0';
  }
  return zeros + str;
}


class Generator {

  constructor({factor, startValue, mult}) {
    this.factor = factor;
    this.value = startValue;
    this.mult = mult;
  }

  next() {
    do {
      this.value = this.value * this.factor % 2147483647;
    } while (this.value % this.mult !== 0);
  }

  toBin() {
    return leftPad(this.value.toString(2));
  }

  toBin16() {
    return this.toBin().slice(16);
  }
}

module.exports = Generator;