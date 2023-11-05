import { comparePower } from './task';

test('Сравниваем две степени', () => {
    expect(comparePower([2, 10], [2, 15])).toBe(1);
});
test('Сравниваем две степени(обе будут равны)', () => {
    expect(comparePower([2, 10], [2, 10])).toBe(0);
});
