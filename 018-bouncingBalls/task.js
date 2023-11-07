export const bouncingBall = (h, bounce, window) => {
    if (typeof h !== 'number' || h <= 0) {
        return -1;
    }
    if (typeof bounce !== 'number' || bounce <= 0 || bounce >= 1) {
        return -1;
    }
    if (typeof window !== 'number' || window >= h) {
        return -1;
    }
    let count = -1;
    while (h > window) {
        count += 2;
        // eslint-disable-next-line no-param-reassign
        h *= bounce;
    }
    return count;
};
console.log(bouncingBall(30.0, 0.66, 1.5));
