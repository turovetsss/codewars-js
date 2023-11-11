import { productFib } from './task';

test('', () => {
    expect(productFib(4895)).toStrictEqual([55, 89, true]);
});
test('', () => {
    expect(productFib(5895)).toStrictEqual([89, 144, false]);
});
