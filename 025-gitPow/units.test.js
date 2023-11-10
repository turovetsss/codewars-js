import { gitPow } from './task';

test('', () => {
    expect(gitPow(89, 1)).toBe(1);
});
test('', () => {
    expect(gitPow(92, 1)).toBe(-1);
});
