import { isPangram } from './task';

test('', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog.')).toBe(true);
});
test('', () => {
    expect(isPangram('This is not a pangram.')).toBe(false);
});
