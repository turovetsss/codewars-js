import { largestRoomArea } from './task';

test('A string with an even length value', () => {
    expect(largestRoomArea( [[1,1,1,1,1,1], 
      [1,0,1,0,0,1], 
      [1,0,1,0,0,1], 
      [1,1,1,1,1,1]])).toStrictEqual(4);
});
test('String with an odd length value', () => {
    expect(largestRoomArea([[1,0], 
      [0,1]])).toStrictEqual(1);
});
