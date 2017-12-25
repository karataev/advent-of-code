class Navigator {

  constructor(mapStr) {
    this.map = mapStr.split('\n');
    this.posX = 0;
    this.posY = 0;
    this.path = '';
  }

  getEntryPoint() {
    return this.map[0].indexOf('|');
  }

  start() {
    this.posX = this.getEntryPoint();
    this.posY = 0;
    this.directionX = 0;
    this.directionY = 1;
    this.steps = 1;
  }

  getCurrentChar() {
    return this.map[this.posY][this.posX];
  }

  rotate() {
    let left = this.map[this.posY][this.posX - 1];
    let right = this.map[this.posY][this.posX + 1];
    let up = this.map[this.posY - 1][this.posX];
    let down = this.map[this.posY + 1][this.posX];

    let dx = this.directionX;
    let dy = this.directionY;

    if (left !== ' ' && !(dx === 1 && dy === 0)) {
      this.directionX = -1;
      this.directionY = 0;
    } else if (right !== ' ' && !(dx === -1 && dy === 0)) {
      this.directionX = 1;
      this.directionY = 0;
    } else if (up !== ' ' && !(dx === 0 && dy === 1)) {
      this.directionX = 0;
      this.directionY = -1;
    } else if (down !== ' ' && !(dx === 0 && dy === -1)) {
      this.directionX = 0;
      this.directionY = 1;
    }
  }

  isFinish() {
    let dx = this.directionX;
    let dy = this.directionY;
    let result = this.map[this.posY + dy][this.posX + dx] === ' ';
    if (result) {
      console.log('Final', this.map[this.posY][this.posX]);
    }
    return result;
  }

  step() {
    this.steps++;
    this.posX += this.directionX;
    this.posY += this.directionY;
    let char = this.getCurrentChar();
    switch (char) {
      case '|':
      case '-':
        if (this.isFinish()) return true;
        break;
      case '+':
        this.rotate();
        break;
      default:
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let index = letters.indexOf(char);
        if (index > -1) this.path += char;
        if (this.isFinish()) return true;
    }
    return false;
  }
}

module.exports = Navigator;