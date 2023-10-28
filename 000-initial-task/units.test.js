import { isEven } from './task';

test('2 is even', () => {
    expect(isEven(2)).toBe(true);
});

test('3 isn\'t even', () => {
    expect(isEven(3)).toBe(false);
});
