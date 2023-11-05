import { pattern } from './task';

test('', () => {
    expect(pattern(1)).toBe('1');
});
test('', () => {
    expect(pattern(3)).toBe('333\n322\n321');
});
