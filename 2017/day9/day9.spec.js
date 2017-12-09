const day9 = require('./day9');
const calcGroups = day9.calcGroups;
const calcScore = day9.calcScore;
const calcGarbage = day9.calcGarbage;

test('{} - 1 group', () => {
    const data = '{}';
    expect(calcGroups(data)).toEqual(1);
});

test('{{{}}} - 3 groups', () => {
    const data = '{{{}}}';
    expect(calcGroups(data)).toEqual(3);
});

test('{{{},{},{{}}}} - 6 groups', () => {
    const data = '{{{},{},{{}}}}';
    expect(calcGroups(data)).toEqual(6);
});

test('{<{},{},{{}}>} - 1 group', () => {
    const data = '{<{},{},{{}}>}';
    expect(calcGroups(data)).toEqual(1);
});

test('{<a>,<a>,<a>,<a>} - 1 group', () => {
    const data = '{<a>,<a>,<a>,<a>}';
    expect(calcGroups(data)).toEqual(1);
});

test('{{<a>},{<a>},{<a>},{<a>}} - 5 groups', () => {
    const data = '{{<a>},{<a>},{<a>},{<a>}}';
    expect(calcGroups(data)).toEqual(5);
});

test('{{<!>},{<!>},{<!>},{<a>}} - 2 groups', () => {
    const data = '{{<!>},{<!>},{<!>},{<a>}}';
    expect(calcGroups(data)).toEqual(2);
});

test('{} - score 1', () => {
    const data = '{}';
    expect(calcScore(data)).toEqual(1);
});

test('{{{}}} - score 6', () => {
    const data = '{{{}}}';
    expect(calcScore(data)).toEqual(6);
});

test('{{},{}} - score 5', () => {
    const data = '{{},{}}';
    expect(calcScore(data)).toEqual(5);
});

test('{{{},{},{{}}}} - score 16', () => {
    const data = '{{{},{},{{}}}}';
    expect(calcScore(data)).toEqual(16);
});

test('{<a>,<a>,<a>,<a>} - score 1', () => {
    const data = '{<a>,<a>,<a>,<a>}';
    expect(calcScore(data)).toEqual(1);
});

test('{{<ab>},{<ab>},{<ab>},{<ab>}} - score 9', () => {
    const data = '{{<ab>},{<ab>},{<ab>},{<ab>}}';
    expect(calcScore(data)).toEqual(9);
});

test('{{<!!>},{<!!>},{<!!>},{<!!>}} - score 9', () => {
    const data = '{{<!!>},{<!!>},{<!!>},{<!!>}}';
    expect(calcScore(data)).toEqual(9);
});

test('{{<a!>},{<a!>},{<a!>},{<ab>}} - score 3', () => {
    const data = '{{<a!>},{<a!>},{<a!>},{<ab>}}';
    expect(calcScore(data)).toEqual(3);
});

test('<> - garbage 0', () => {
    const data = '<>';
    expect(calcGarbage(data)).toEqual(0);
});

test('<random characters> - garbage 17', () => {
    const data = '<random characters>';
    expect(calcGarbage(data)).toEqual(17);
});

test('<<<<> - garbage 3', () => {
    const data = '<<<<>';
    expect(calcGarbage(data)).toEqual(3);
});

test('<{!>}> - garbage 2', () => {
    const data = '<{!>}>';
    expect(calcGarbage(data)).toEqual(2);
});

test('<!!> - garbage 0', () => {
    const data = '<!!>';
    expect(calcGarbage(data)).toEqual(0);
});

test('<!!!>> - garbage 0', () => {
    const data = '<!!!>>';
    expect(calcGarbage(data)).toEqual(0);
});

test('<{o"i!a,<{i<a> - garbage 10', () => {
    const data = '<{o"i!a,<{i<a>';
    expect(calcGarbage(data)).toEqual(10);
});


