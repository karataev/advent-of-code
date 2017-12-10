const _ = require('lodash');

function reverseList(list) {
    return list.slice().reverse();
}

function getListFragment(list, startIndex, count) {
    let result = [];
    for (let i = startIndex; i < startIndex + count; i++) {
        let index = i % list.length;
        result.push(list[index]);
    }
    return result;
}

function reverseListFragment(list, startIndex, count) {
    const toRevert = getListFragment(list, startIndex, count);
    const reverted = reverseList(toRevert);
    const pre = list.slice(0, startIndex);
    const post = list.slice(startIndex + count);
    let result = pre;
    for (let i = 0; i < reverted.length; i++) {
        let index = (startIndex + i) % list.length;
        result[index] = reverted[i];
    }
    return result.concat(post);
}

function solve(list, lengthsStr) {
    // console.log('start', JSON.stringify(list, null, 2));
    const lengths = lengthsStr
        .split(',')
        .map(item => Number(item));

    let currentPos = 0;
    let skipSize = 0;

    for (let i = 0; i < lengths.length; i++) {
        let length = lengths[i];
        list = reverseListFragment(list, currentPos, length);
        // console.log('step', i + 1, JSON.stringify(list, null, 2));
        currentPos = (currentPos + length + skipSize) % list.length;
        skipSize++;
    }

    return list[0] * list[1];
}

let list = _.range(256);

const lengthsStr = '120,93,0,90,5,80,129,74,1,165,204,255,254,2,50,113';
const res = solve(list, lengthsStr);
console.log(res);

module.exports = {
    reverseList,
    reverseListFragment,
};
