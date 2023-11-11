import { isAnagram } from './task';

test('', () => {
    expect(isAnagram('foefet', 'toffee')).toBe(true);
});
test('', () => {
    expect(isAnagram('dumble', 'bumble')).toBe(false);
});
