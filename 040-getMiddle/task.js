export const getMiddle = (s) => {
    const { length } = s;
    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 0) {
        return s.slice(middleIndex - 1, middleIndex + 1);
    }
    return s[middleIndex];
};
console.log(getMiddle('test'));
