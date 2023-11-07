import { queueTime } from './task';

test('Тест 1:', () => {
    expect(queueTime([], 1)).toBe(0);
});
test('Тест 2:', () => {
    expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toBe(9);
});
