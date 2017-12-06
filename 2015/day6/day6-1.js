// let data = ['turn on 0,0 through 999,999', 'toggle 0,0 through 2,2'];
let data = require('./day6-data')
    .split('\n');

function getLightsOn(lights) {
    const rowLength = lights[0].length;
    let result = 0;
    for (let i = 0; i < lights.length; i++) {
        for (let j = 0; j < rowLength; j++) {
            if (lights[i][j] === 1) result++;
        }
    }
    return result;
}

function initLights() {
    let lights = [];
    for (let i = 0; i < 1000; i++) {
        lights[i] = [];
        for (let j = 0; j < 1000; j++) {
            lights[i][j] = 0;
        }
    }
    return lights;
}

function parseInstruction(str) {
    const parts = str.split(' ');
    const end = parts[parts.length - 1];
    const start = parts[parts.length - 3];
    let rule = '';
    if (parts[0] === 'toggle') rule = parts[0];
    else if (parts[0] === 'turn' && parts[1] === 'on') rule = 'turn on';
    else if (parts[0] === 'turn' && parts[1] === 'off') rule = 'turn off';

    const startParts = start.split(',');
    const endParts = end.split(',');

    return {
        rule,
        startX: Number(startParts[0]),
        startY: Number(startParts[1]),
        endX: Number(endParts[0]),
        endY: Number(endParts[1]),
    }
}

function modifyLights(lights, obj) {
    for (let i = obj.startY; i <= obj.endY; i++) {
        for (let j = obj.startX; j <= obj.endX; j++) {
            switch (obj.rule) {
                case 'turn on':
                    lights[i][j] = 1;
                    break;
                case 'turn off':
                    lights[i][j] = 0;
                    break;
                case 'toggle':
                    lights[i][j] = lights[i][j] === 0 ? 1 : 0;
                    break;
            }
        }
    }
}

function manageLights(instructions) {
    let lights = initLights();

    for (let i = 0; i < instructions.length; i++) {
        const obj = parseInstruction(instructions[i]);
        console.log(i + 1, JSON.stringify(obj));
        modifyLights(lights, obj);
    }

    return getLightsOn(lights);
}

const res = manageLights(data);
console.log(res);
