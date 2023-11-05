export const comparePower = (n1, n2) => {
    const num1 = n1[0] ** n1[1];
    const num2 = n2[0] ** n2[1];
    if (num1 > num2) {
        return -1;
    }
    if (num2 > num1) {
        return 1;
    }
    return 0;
};
console.log(comparePower([2, 10], [2, 15]));
