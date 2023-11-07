import { bmi } from './task';

test('Тест 1:', () => {
    expect(bmi(80, 1.80)).toBe('Normal');
});
test('Тест 1:', () => {
    expect(bmi(50, 1.80)).toBe('Underweight');
});
