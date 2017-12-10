const day10 = require('./day10');
const reverseList = day10.reverseList;
const reverseListFragment = day10.reverseListFragment;

test('reverse list', () => {
    expect(reverseList([1,2,3,4,5])).toEqual([5,4,3,2,1]);
});

test('reverse list fragment inside boundaries', () => {
    expect(reverseListFragment([0,1,2,3,4], 0, 3)).toEqual([2,1,0,3,4]);
});

test('reverse list fragment outside boundaries', () => {
    expect(reverseListFragment([2,1,0,3,4], 3, 4)).toEqual([4,3,0,1,2]);
});

