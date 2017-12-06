const data = require('./day5-data');

const rows = data.split('\n');

function isNice(str) {
    const badRe = /ab|cd|pq|xy/g;
    if (badRe.test(str)) {
        return false;
    }

    const vowelsRe = /[aeiou]/g;
    const vowelsMatchResult = str.match(vowelsRe);
    const vowelsMatch = vowelsMatchResult ? vowelsMatchResult.length >= 3 : false;

    const doubleRe = /([a-z])\1/g;
    const doubleReMatch = doubleRe.test(str);

    return vowelsMatch && doubleReMatch;
}

const total = rows.reduce((acc, row) => {
    return isNice(row) ? acc + 1 : acc;
}, 0);
console.log('total', total);

module.exports = isNice;