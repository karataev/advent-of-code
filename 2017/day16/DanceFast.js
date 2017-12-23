class DanceFast {

  constructor(program, indeces) {
    this.program = program;
    this.indeces = indeces;
    this.indecesLen = this.indeces.length;
  }

  dance() {
    let arr = [];
    for (let j = 0; j < this.indecesLen; j++) {
      arr[this.indeces[j]] = this.program[j];
    }
    this.program = arr.join('');
  }
}

module.exports = DanceFast;