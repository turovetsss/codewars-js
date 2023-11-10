import { validatePin } from './task';

test('', () => {
    expect(validatePin('-1234')).toBe(false);
});
test('', () => {
    expect(validatePin('1111')).toBe(true);
});
