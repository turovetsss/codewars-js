import { maxSequence } from './task';

test('', () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
});
test('', () => {
    expect(maxSequence([])).toBe(0);
});
