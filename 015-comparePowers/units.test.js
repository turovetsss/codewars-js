import { friendFind } from './task';

test('', () => {
    expect(friendFind(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke'])).toStrictEqual(['Jimm', 'Cari', 'aret']);
});
test('', () => {
    expect(friendFind(['Love', 'Your', 'Face', '1'])).toStrictEqual(['Love', 'Your', 'Face']);
});
test('', () => {
    expect(friendFind(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])).toStrictEqual(['Ryan']);
});
test('', () => {
    expect(friendFind(['Ryan', 'Kieran', 'Mark'])).toStrictEqual(['Ryan', 'Mark']);
});
