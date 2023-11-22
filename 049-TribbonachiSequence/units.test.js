import { tribonacci } from './task';

test('Testing signature length 10', () => {
    expect(tribonacci([1, 1, 1], 10)).toStrictEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105]);
});
test('Test2', () => {
    expect(tribonacci([1, 2, 3], 10)).toStrictEqual([1, 2, 3, 6, 11, 20, 37, 68, 125, 230]);
});
