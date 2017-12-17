const solve = require('./day11');

test('ne,ne,ne', () => {
    expect(solve('ne,ne,ne')).toEqual(3);
});

test('ne,ne,sw,sw', () => {
    expect(solve('ne,ne,sw,sw')).toEqual(0);
});

test('ne,ne,s,s', () => {
    expect(solve('ne,ne,s,s')).toEqual(2);
});

test('se,sw,se,sw,sw', () => {
    expect(solve('se,sw,se,sw,sw')).toEqual(3);
});

