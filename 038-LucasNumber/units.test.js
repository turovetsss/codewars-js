import { lucasnum } from './task';

test('', () => {
    expect(lucasnum(-10)).toStrictEqual(123);
});
test('', () => {
    expect(lucasnum(5)).toStrictEqual(11);
});
