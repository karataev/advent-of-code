const _ = require('lodash');

const Scanner = require('./Scanner');

// const data = `0: 3
// 1: 2
// 4: 4
// 6: 4`;
const data = require('./day13-data');

function parse(data) {
  return data
    .split('\n')
    .map(row => {
      const parts = row.split(': ');
      const depth = Number(parts[0]);
      const range = Number(parts[1]);
      return {depth, range};
    });
}

function createScanners(data) {
  return data.map(obj => new Scanner(obj.depth, obj.range));
}

function getScannerByDepth(scanners, depth) {
  return _.find(scanners, {depth});
}

function getSeverity(scanners, delay) {
  const maxDepth = scanners[scanners.length - 1].depth;

  let depth = -delay;
  let severity = 0;

  for (let i = 0; i <= maxDepth + delay; i++) {
    const scanner = getScannerByDepth(scanners, depth);
    if (scanner && scanner.isOnStart()) {
      severity += scanner.depth * scanner.range;
    }
    scanners.forEach(scanner => scanner.nextStep());
    depth++;
  }

  return severity;
}

function isCaught(scanners, delay) {
  const maxDepth = scanners[scanners.length - 1].depth;

  scanners.forEach(scanner => {
    scanner.skipSteps(delay);
  });
  // console.log('delay', delay);
  // scanners.forEach(scanner => scanner.print());

  for (let i = 0; i <= maxDepth; i++) {
    const scanner = getScannerByDepth(scanners, i);
    // console.log(i, scanner);
    if (scanner && scanner.isOnStart()) return true;
    scanners.forEach(scanner => scanner.nextStep());
  }

  return false;
}

function solve(data) {
  const parsedData = parse(data);
  const scanners = createScanners(parsedData);

  for (let i = 0; i < 10000000; i++) {
    scanners.forEach(scanner => scanner.reset());
    if (!isCaught(scanners, i)) {
      console.log('found!', i);
      return;
    }
  }
  console.log('not found');
}

solve(data);

