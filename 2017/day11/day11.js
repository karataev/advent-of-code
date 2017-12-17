function solve(data) {
    const sin30 = 0.5;
    const cos30 = Math.cos(30 * Math.PI / 180);
    const steps = data.split(',');

    const directions = {
        n: [0, -1],
        ne: [cos30, -sin30],
        se: [cos30, sin30],
        s: [0, 1],
        sw: [-cos30, sin30],
        nw: [-cos30, -sin30],
    };

    let pos = [0, 0];
    steps.forEach(step => {
        const currentDir = directions[step];
        pos[0] += currentDir[0];
        pos[1] += currentDir[1];
    });
    console.log('final pos', pos);
}

// const data = 'se,sw,se,sw,sw';
const data = require('./day11-data');
console.log(solve(data));

module.exports = solve;