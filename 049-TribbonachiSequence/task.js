export const tribonacci = (signature, n) => {
    if (n === 0) {
        return [];
    } if (n <= 3) {
        return signature.slice(0, n);
    }
    for (let i = 3; i < n; i++) {
        signature.push(signature[i - 1] + signature[i - 2] + signature[i - 3]);
    }

    return signature;
};

console.log(tribonacci([1, 1, 1], 10));
