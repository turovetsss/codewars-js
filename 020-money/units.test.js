import { calculateYears } from './task';

test('Тест 1:', () => {
    expect(calculateYears(1000, 0.01625, 0.18, 1200)).toBe(14);
});
test('Тест 2:', () => {
    expect(calculateYears(1000, 0.05, 0.18, 1000)).toBe(0);
});
