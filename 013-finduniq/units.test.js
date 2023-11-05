import { findUniq } from './task';

test('', () => {
    expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2);
});
test('', () => {
    expect(findUniq([0, 0, 1])).toBe(1);
});
