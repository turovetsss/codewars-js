import { findUniqStr } from './task';

test('', () => {
    expect(findUniqStr('AAAABBBCCDAABBB')).toBe(['A', 'B', 'C', 'D', 'A', 'B']);
});
