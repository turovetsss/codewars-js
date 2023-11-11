// eslint-disable-next-line consistent-return
export const productFib = (prod) => {
    let fibPrev = 0;
    let fibCurr = 1;

    while (fibPrev * fibCurr < prod) {
        const fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }

    return [fibPrev, fibCurr, fibPrev * fibCurr === prod];
};
console.log(productFib(4895));
