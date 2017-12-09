// const data = '1674 -> b';
const data = require('./day7-data');

function parseOperand(obj, op) {
    return isNaN(op) ? obj[op] : Number(op);
}

function calc(operator, value1, value2) {
    switch (operator) {
        case 'AND': return value1 & value2;
        case 'OR': return value1 | value2;
        case 'LSHIFT': return value1 << value2;
        case 'RSHIFT': return value1 >> value2;
    }
}

function executeCommand(obj, commandStr) {
    const command = commandStr.split(' ');
    if (command.length === 3) {
        const key = command[2];
        const value = parseOperand(obj, command[0]);
        if (value === undefined) return false;
        obj[key] = value;
    } else if (command.length === 5) {
        const key = command[4];
        const value1 = parseOperand(obj, command[0]);
        const value2 = parseOperand(obj, command[2]);
        if (value1 === undefined || value2 === undefined) return false;

        obj[key] = calc(command[1], value1, value2);
    }
    else if (command.length === 4 && command[0] === 'NOT') {
        const key = command[3];
        const value1 = parseOperand(obj, command[1]);
        if (value1 === undefined) return false;
        obj[key] = 65535 - value1;
    }
    return true;
}


function executeSeq(seq) {
    const commands = seq.split('\n');

    let obj = {};
    while (commands.length > 0) {
        let i = 0;
        while (i < commands.length) {
            const res = executeCommand(obj, commands[i]);
            if (res) {
                commands.splice(i, 1);
            } else {
                i++;
            }
        }
    }
    return obj;
}

const res = executeSeq(data);
console.log(res.a);

module.exports = executeSeq;
