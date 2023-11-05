export const findUniq = (arr) => {
    let uniqueNum;
    if (arr[0] !== arr[1]) {
        uniqueNum = arr[0] === arr[2] ? arr[1] : arr[0];
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== arr[0]) {
                uniqueNum = arr[i];
                break;
            }
        }
    }
    return uniqueNum;
};
console.log(`${findUniq([1, 1, 1, 2, 1, 1])}`);
