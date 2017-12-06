const isNice = require('./day5-1');

test('ugknbfddgicrmopn should be nice', () => {
    expect(isNice('ugknbfddgicrmopn')).toBe(true);
});

test('aaa should be nice', () => {
    expect(isNice('aaa')).toBe(true);
});

test('jchzalrnumimnmhp should be naughty', () => {
    expect(isNice('jchzalrnumimnmhp')).toBe(false);
});

test('haegwjzuvuyypxyu should be naughty', () => {
    expect(isNice('haegwjzuvuyypxyu')).toBe(false);
});

test('dvszwmarrgswjxmb should be naughty', () => {
    expect(isNice('dvszwmarrgswjxmb')).toBe(false);
});

