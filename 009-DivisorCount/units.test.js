import { getDivisorsCnt } from './task';

test('', () => {
    expect(getDivisorsCnt(10)).toStrictEqual(4);
});
test('', () => {
    expect(getDivisorsCnt(1)).toStrictEqual(1);
});
test('', () => {
    expect(getDivisorsCnt(54)).toStrictEqual(8);
});
