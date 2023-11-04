import { sortByLength } from './task';

test('', () => {
    expect(sortByLength(['Beg', 'Life', 'I', 'To'])).toBe(['I', 'To', 'Beg', 'Life']);
});
