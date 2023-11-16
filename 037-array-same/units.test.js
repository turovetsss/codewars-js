import { arraySame } from './task';

test('', () => {
    // eslint-disable-next-line max-len
    expect(arraySame([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361])).toStrictEqual(true);
});
test('', () => {
    // eslint-disable-next-line max-len
    expect(arraySame([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361])).toStrictEqual(false);
});
