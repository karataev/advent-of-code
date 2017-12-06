module.exports = calcCycles;

function spreadBlocks(memoryBanks) {
    const getNextIndex = i => (i + 1) % memoryBanks.length;

    const maxValue = Math.max.apply(Math, memoryBanks);
    const maxIndex = memoryBanks.indexOf(maxValue);
    memoryBanks[maxIndex] = 0;
    for (let i = 0; i < maxValue; i++) {
        const nextIndex = getNextIndex(maxIndex + i);
        memoryBanks[nextIndex]++;
    }

}

function calcCycles(memoryBanks) {
    console.log('start', memoryBanks);
    let history = [];
    let i = 0;
    do {
        i++;
        spreadBlocks(memoryBanks);
        const banksStr = JSON.stringify(memoryBanks);
        console.log(i, memoryBanks);
        if (history.indexOf(banksStr) > -1) {
            return i;
        }
        history.push(JSON.stringify(memoryBanks));
    } while (true);

}

// const data = [0, 2, 7, 0];
const data = '4\t10\t4\t1\t8\t4\t9\t14\t5\t1\t14\t15\t0\t15\t3\t5'
    .split('\t')
    .map(item => Number(item));
const res = calcCycles(data);
console.log('steps', res);
