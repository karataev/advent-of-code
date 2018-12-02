const data = require('./day8-data').split('\n');
// const data = '\uk';
// const data = '""';

function getCharsAmount(str) {

    return str.length;
}

function getCodeLength(str) {
    str = str.slice(1, str.length - 1);
    return str.length;
}

function parse(data) {
    for (let i = 0; i < data.length; i++) {
        const str = data[i];
        console.log(str);
        console.log('chars', getCharsAmount(str));
        console.log('in memory', getCodeLength(str));
    }
}

parse(data);