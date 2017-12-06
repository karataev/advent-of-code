const isNice = require('./day5-2');

test('qjhvhtzxzqqjkmpb should be nice', () => {
    expect(isNice('qjhvhtzxzqqjkmpb')).toBe(true);
});

test('xxyxx should be nice', () => {
    expect(isNice('xxyxx')).toBe(true);
});

test('uurcxstgmygtbstg should be naughty', () => {
    expect(isNice('uurcxstgmygtbstg')).toBe(false);
});

test('ieodomkazucvgmuy should be naughty', () => {
    expect(isNice('ieodomkazucvgmuy')).toBe(false);
});

