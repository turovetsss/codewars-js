import { deleteNth } from './task';

test('', () => {
    expect(deleteNth([20, 37, 20, 21], 1)).toStrictEqual([20, 37, 21]);
});
test('', () => {
    expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toStrictEqual([1, 1, 3, 3, 7, 2, 2, 2]);
});
