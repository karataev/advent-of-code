const data = require('./day5-data');

const rows = data.split('\n');

function isNice(str) {
    const re1 = /(.)(.).*\1\2/g;
    const re2 = /(.).\1/g;

    return re1.test(str) && re2.test(str);
}

const total = rows.reduce((acc, row) => {
    return isNice(row) ? acc + 1 : acc;
}, 0);
console.log('total', total);

module.exports = isNice;