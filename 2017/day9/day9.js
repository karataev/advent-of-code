const data = require('./day9-data');

function calcGroups(input) {
    let result = 0;
    let isGarbage = false;
    let isCancel = false;
    for (let i = 0; i < input.length; i++) {
        if (isCancel) {
            isCancel = false;
            continue;
        }
        switch (input[i]) {
            case '<':
                isGarbage = true;
                break;
            case '>':
                isGarbage = false;
                break;
            case '{':
                if (!isGarbage) result++;
                break;
            case '!':
                isCancel = true;
                break;
        }
    }
    return result;
}

function calcScore(input) {
    let result = 0;
    let groupScore = 1;
    let isGarbage = false;
    let isCancel = false;
    for (let i = 0; i < input.length; i++) {
        if (isCancel) {
            isCancel = false;
            continue;
        }
        switch (input[i]) {
            case '<':
                isGarbage = true;
                break;
            case '>':
                isGarbage = false;
                break;
            case '{':
                if (!isGarbage) {
                    result += groupScore;
                    groupScore++;
                }
                break;
            case '}':
                if (!isGarbage) groupScore--;
                break;
            case '!':
                isCancel = true;
                break;
        }
    }
    return result;
}

function calcGarbage(input) {
    let result = 0;
    let isGarbage = false;
    let isCancel = false;
    for (let i = 0; i < input.length; i++) {
        if (isCancel) {
            isCancel = false;
            continue;
        }
        switch (input[i]) {
            case '<':
                if (!isGarbage) {
                    isGarbage = true;
                    result--;
                }
                break;
            case '>':
                isGarbage = false;
                break;
            case '!':
                isCancel = true;
                continue;
        }

        if (isGarbage) result++;
    }
    return result;
}


console.log(calcGarbage(data));

module.exports = {
    calcGroups,
    calcScore,
    calcGarbage,
};
