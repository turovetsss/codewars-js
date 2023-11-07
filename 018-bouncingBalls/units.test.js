import { bouncingBall } from './task';

test('Тест 1:', () => {
    expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15);
});
test('Тест 2:', () => {
    expect(bouncingBall(3.0, 1.0, 1.5)).toBe(-1);
});
