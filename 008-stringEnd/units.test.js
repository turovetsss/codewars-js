import { StringEnd } from './task';

test('', () => {
    expect(StringEnd('abcde', 'cde')).toStrictEqual(true);
});
test('', () => {
    expect(StringEnd('abcde', 'abc')).toStrictEqual(false);
});
