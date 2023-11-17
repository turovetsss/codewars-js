import { getMiddle } from './task';

test('', () => {
    expect(getMiddle('test')).toStrictEqual('es');
});
test('', () => {
    expect(getMiddle('testing')).toStrictEqual('t');
});
