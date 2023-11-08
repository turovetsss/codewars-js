export const calculateYears = (principal, interest, tax, desired) => {
    let years = 0;

    while (principal < desired) {
        const interestEarned = principal * interest;
        const taxPaid = interestEarned * tax;
        // eslint-disable-next-line no-param-reassign
        principal += interestEarned - taxPaid;
        years++;
    }

    return years;
};
console.log(calculateYears(1000, 0.05, 0.18, 1100));
