import { sumDigPow } from './task';

test('Fix test', () => {
    expect(sumDigPow(10, 100)).toStrictEqual([89]);
});
test('Test should Return the numbers array', () => {
    expect(sumDigPow(1, 100)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
});
