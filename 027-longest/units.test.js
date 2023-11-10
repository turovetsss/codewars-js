import { longestConsec } from './task';

test('', () => {
    expect(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)).toBe('abigailtheta');
});
test('', () => {
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)).toBe('ixoyx3452zzzzzzzzzzzz');
});
