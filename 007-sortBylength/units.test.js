import { sortByLength } from './task';

test('', () => {
    expect(sortByLength(['Longer', 'Longest', 'Short'])).toStrictEqual(['Short', 'Longer', 'Longest']);
});
