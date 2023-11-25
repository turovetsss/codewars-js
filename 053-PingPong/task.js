export const pingPong = (sounds) => {
    const data = sounds.split('-');
    let pingCount = 0;
    let pongCount = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'ping' && data[i + 1] === 'pong') {
            pingCount++;
        }
        if (data[i] === 'pong' && data[i + 1] === 'ping') {
            pongCount++;
        }
    }
    if (pingCount === pongCount) {
        if (data.lastIndexOf('ping') > data.lastIndexOf('pong')) {
            return 'pong';
        }
        if (data.lastIndexOf('pong') > data.lastIndexOf('ping')) {
            return 'ping';
        }
    }
    return pingCount >= pongCount ? 'ping' : 'pong';
};

console.log(pingPong('ping-pong-ping-pong-bonk-bing-doof'));
