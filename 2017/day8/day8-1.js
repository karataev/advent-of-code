// const data = `b inc 5 if a > 1
// a inc 1 if b < 5
// c dec -10 if a >= 1
// c inc -20 if c == 10`;
const data = require('./day8-data');

function getRegisters(instructions) {
    let result = {};
    instructions
        .forEach(item => {
            const register = item.split(' ')[0];
            result[register] = 0;
        });
    return result;
}

function parseInstruction(registers, item) {
    const parts = item.split(' ');
    const register = parts[0];
    const operation = parts[1];
    const amount = isNaN(parts[2]) ? registers[[parts[2]]] : Number(parts[2]);
    const reg2 = registers[parts[4]];
    const condition = eval(`${reg2}${parts[5]}${parts[6]}`); // is evil!
    if (!condition) return;
    if (operation === 'inc') {
        registers[register] += amount;
    } else if (operation === 'dec') {
        registers[register] -= amount;
    }
}

function getMaxValue(obj) {
    let max = -Infinity;
    const keys = Object.keys(obj);
    keys.forEach(key => {
        if (obj[key] > max) max = obj[key];
    });
    return max;
}

function evaluate(data) {
    const instructions = data.split('\n');
    let registers = getRegisters(instructions);

    instructions.forEach(item => {
        parseInstruction(registers, item);
    });
    const max = getMaxValue(registers);

    console.log(max);
}

evaluate(data);