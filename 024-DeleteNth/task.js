export const deleteNth = (arr, n) => {
    const count = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        count[num] = count[num] ? count[num] + 1 : 1;
        if (count[num] <= n) {
            result.push(num);
        }
    }
    return result;
};
console.log(deleteNth([20, 37, 20, 21], 1));
