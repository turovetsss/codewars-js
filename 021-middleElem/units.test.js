import { gimme } from './task';

test('Тест 1', () => {
    expect(gimme([2, 3, 1])).toBe(0);
});
test('Тест 2', () => {
    expect(gimme([5, 10, 14])).toBe(1);
});
