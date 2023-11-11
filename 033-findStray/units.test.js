import { stray } from './task';

test('', () => {
    expect(stray([1, 1, 2])).toBe(2);
});
test('', () => {
    expect(stray([1, 2, 1])).toBe(2);
});
