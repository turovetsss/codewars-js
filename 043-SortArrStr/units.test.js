import { sortme } from './task';

test('', () => {
    expect(sortme(['Hello', 'there', "I'm", 'fine'])).toStrictEqual(['fine', 'Hello', "I'm", 'there']);
});
test('', () => {
    expect(sortme(['C', 'd', 'a', 'B'])).toStrictEqual(['a', 'B', 'C', 'd']);
});
