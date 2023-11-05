export const sortByLength = (arr) => {
    const Myarr = [...arr];
    for (let i = 1; i < Myarr.length; i++) {
        const current = Myarr[i];
        let j = i - 1;

        while (j >= 0 && Myarr[j].length > current.length) {
            Myarr[j + 1] = Myarr[j];
            j--;
        }

        Myarr[j + 1] = current;
    }

    return Myarr;
};
console.log(`2 is even = ${sortByLength(['Longer', 'Longest', 'Short'])}`);
