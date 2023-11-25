import { pingPong } from './task';

test('return ping', () => {
    expect(pingPong('ping-pong-ping-pong-bonk-bing-doof')).toStrictEqual('ping');
});
