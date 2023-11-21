import { highestRank } from './task';

test('should test', () => {
    expect(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])).toStrictEqual(12);
});
test('should test2', () => {
    expect(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10])).toStrictEqual(3);
});
