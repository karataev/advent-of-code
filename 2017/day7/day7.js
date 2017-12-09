const data = require('./day7-data');

const getWeight = str => Number(str.replace(/[()]/g, ''));

function getLeaves(rows) {
    let result = {};
    rows.forEach(row => {
        const parts = row.split(' ');
        if (parts.length === 2) {
            const key = parts[0];
            result[key] = {
                weight: getWeight(parts[1]),
            };
        }
    });
    return result;
}

function parseNode(store, {key, weight, childKeys}) {
    if (store[key]) return;
    let children = {};
    for (let i = 0; i < childKeys.length; i++) {
        const childKey = childKeys[i];
        if (!store[childKey]) return;
        children[childKey] = store[childKey];
    }
    store[key] = {
        weight,
        children,
    };

    for (let i = 0; i < childKeys.length; i++) {
        const childKey = childKeys[i];
        delete store[childKey];
    }
}

function iterate(store, rows) {
    rows.forEach(row => {
        const parts = row
            .split(' ');

        if (parts.length > 2) {
            let childKeys = parts.slice(3).join('').split(',');
            parseNode(store, {
                key: parts[0],
                weight: getWeight(parts[1]),
                childKeys,
            });
        }
    });
}

function getTower(input) {
    const rows = input.split('\n');
    let store = getLeaves(rows);
    while (Object.keys(store).length > 1) {
        iterate(store, rows);
    }

    return store;
}

function findTowerRootName(input) {
    const store = getTower(input);
    // console.log(store);
    console.log(JSON.stringify(store, null, 2));

    return Object.keys(store)[0];
}

function calcWeights(node) {
    if (!node.children) {
        node.total = node.weight;
        delete node.weight;
        return node.total;
    }
    let total = 0;
    for (let key in node.children) {
        total += calcWeights(node.children[key]);
    }
    node.total = node.weight + total;
    // delete node.weight;
    return node.total;
}

function simplify(node) {
    if (!node.children) {
        return;
    }
    // console.log(node);
    const keys = Object.keys(node.children);
    let allEquals = true;
    for (let i = 1; i < keys.length; i++) {
        if (node.children[keys[0]].total !== node.children[keys[i]].total) {
            allEquals = false;
        }
    }
    if (allEquals) {
        delete node.children;
    } else {
        for (let i = 0; i < keys.length; i++) {
            simplify(node.children[keys[i]]);
        }
    }

}

// const res = findTowerRootName(data);
const tower = getTower(data);
const root = tower[Object.keys(tower)[0]];
const res = calcWeights(root);
simplify(root);
// console.log(tower);
console.log(JSON.stringify(tower, null, 2));
