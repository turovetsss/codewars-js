import { findUniqStr } from './task';

test('', () => {
    expect(findUniqStr('AAAABBBCCDAABBB')).toStrictEqual(['A', 'B', 'C', 'D', 'A', 'B']);
});
