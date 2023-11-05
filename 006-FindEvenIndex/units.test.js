import { FindEvenIndex } from './task';

test('', () => {
    expect(FindEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3);
});
test('', () => {
    expect(FindEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1);
});
test('', () => {
    expect(FindEvenIndex([1, 2, 3, 4, 5, 6])).toBe(-1);
});
