class CycleList {
  constructor() {
    this.state = {};

  }

  insertNode(value) {
    if (typeof this.state.value === 'undefined') {
      this.state.value = value;
      this.state.next = this.state;
    } else {
      let next = this.state.next;
      this.state.next = {value: value, next: next};
    }
  }

  print() {
    console.log(this.state);
  }
}

module.exports = CycleList;