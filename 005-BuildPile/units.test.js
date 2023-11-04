import { FindNb } from './task';

test('', () => {
    expect(FindNb(4183059834009)).toBe(2022);
});
test('', () => {
    expect(FindNb(24723578342962)).toBe(-1);
});
test('', () => {
    expect(FindNb(135440716410000)).toBe(4824);
});
