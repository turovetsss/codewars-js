import { oddLength } from './task';

test('', () => {
    expect(oddLength([1, 1, 2])).toStrictEqual(2);
});
test('', () => {
    expect(oddLength([2, 2, 2, 4, 2])).toStrictEqual(4);
});
test('', () => {
    expect(oddLength([3, 3, 1, 3, 3])).toStrictEqual(1);
});
