let data = require('./day5-data')
    .split('\n')
    .map(item => Number(item));

// let data = '0,3,0,1,-3'
//     .split(',')
//     .map(item => Number(item));

function stepsBeforeExit(path) {
    let index = 0;
    let steps = 0;
    do {
        let jump = path[index];
        path[index] = jump >= 3 ? path[index] - 1: path[index] + 1;
        index += jump;
        steps++;
    } while (index >= 0 && index < path.length);
    return steps;
}


console.log('start', data);
const res = stepsBeforeExit(data);
console.log('end', data);
console.log('steps', res);