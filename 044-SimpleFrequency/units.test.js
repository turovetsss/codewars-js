import { solve } from './task';

test('', () => {
    expect(solve([2, 3, 5, 3, 7, 9, 5, 3, 7])).toStrictEqual([3, 3, 3, 5, 5, 7, 7, 2, 9]);
});
test('', () => {
    expect(solve([4, 4, 2, 5, 1, 1, 3, 3, 2, 8])).toStrictEqual([1, 1, 2, 2, 3, 3, 4, 4, 5, 8]);
});
