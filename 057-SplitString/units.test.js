import { solution } from './task';

test('A string with an even length value', () => {
    expect(solution('abcdef')).toStrictEqual(["ab", "cd", "ef"]);
});
test('String with an odd length value', () => {
    expect(solution("abcdefg")).toStrictEqual(["ab", "cd", "ef","g_"]);
});
