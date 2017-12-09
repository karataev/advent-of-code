const executeSeq = require('./day7');
const data = require('./day7-data-test');

test('test data', () => {
    const res = executeSeq(data);
    expect(res).toEqual({x: 123, y: 456, d: 72, e: 507, f: 492, g: 114, h: 65412, i: 65079});
});
