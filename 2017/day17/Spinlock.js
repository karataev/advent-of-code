class Spinlock {

  constructor(stepsPerIteration) {
    this.steps = stepsPerIteration;
    this.state = [0];
    let node1 = {value: 0, next: null};
    let node2 = {value: 1, next: null};
    node1.next = node2;
    node2.next = node1;
    this.state = {value: 0, next: null};
    this.currentPos = 0;
    this.currentValue = 1;
  }

  iterate() {
    let steps = this.steps % this.state.length;
    this.currentPos = (this.currentPos + steps) % this.state.length + 1;
    this.state.splice(this.currentPos, 0, this.currentValue);
    this.currentValue++;
  }
}

module.exports = Spinlock;