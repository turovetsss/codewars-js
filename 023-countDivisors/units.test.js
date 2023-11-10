import { countDivisors } from './task';

test('Тест 1:', () => {
    expect(countDivisors(10)).toBe(4);
});
test('Тест 2:', () => {
    expect(countDivisors(11)).toBe(2);
});
