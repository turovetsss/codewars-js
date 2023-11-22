import { accum } from './task';

test('should test', () => {
    expect(accum('ZpglnRxqenU')).toStrictEqual('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
});
test('should test2', () => {
    expect(accum('NyffsGeyylB')).toStrictEqual('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
});
