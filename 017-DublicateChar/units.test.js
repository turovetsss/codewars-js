import { dublicateCount } from './task';

test('Тест 1:', () => {
    expect(dublicateCount('aabBcde')).toBe(2);
});
test('Тест 2:', () => {
    expect(dublicateCount('Indivisibilities')).toBe(2);
});
