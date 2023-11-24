export const getDividers = (primes, powers) => {
    let dividers = [1];

    for (let i = 0; i < primes.length; i++) {
        const temp = [];
        const prime = primes[i];

        for (let j = 0; j <= powers[i]; j++) {
            for (let k = 0; k < dividers.length; k++) {
                temp.push(dividers[k] * prime ** j);
            }
        }

        dividers = temp;
    }

    dividers.sort((a, b) => a - b);

    return dividers;
};

console.log(getDividers([11, 113], [1, 1]));
