export const FindEvenIndex = (arr) => {
    const { length } = arr;
    for (let i = 0; i < length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let k = i + 1; k < length; k++) {
            rightSum += arr[k];
        }
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};
console.log(`2 is even = ${FindEvenIndex([1, 2, 3, 4, 3, 2, 1])}`);
