import { prizeCounter } from './task';

test('', () => {
    expect(prizeCounter(['R', 'R', 'R', 'R'])).toStrictEqual(800);
});
test('', () => {
    expect(prizeCounter(['G', 'G', 'B', 'G', 'R', 'R', 'B', 'G', 'R'])).toStrictEqual(900);
});
