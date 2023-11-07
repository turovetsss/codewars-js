import { computePositions } from './task';

test('', () => {
    expect(computePositions(10, [])).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
});
test('', () => {
    expect(computePositions(
        6,
        [[0, 5, 2, 0],
            [1, 4, 2, 2],
            [2, 3, 1, 3],
            [1, 5, 0, 0],
            [2, 0, 2, 1],
            [3, 4, 3, 1]],
    )).toStrictEqual([2, 3, 4, 1, 5, 6]);
});
test('', () => {
    expect(
        computePositions(
            4,
            [[0, 3, 1, 1],
                [1, 2, 2, 2],
                [1, 3, 2, 0],
                [2, 0, 2, 0]],
        ),
    ).toStrictEqual([3, 1, 1, 3]);
});
