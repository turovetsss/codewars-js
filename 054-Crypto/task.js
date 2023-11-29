export const encrypt = (k, n) => {
    let s = k;
    if (!s || n <= 0) {
        return s;
    }

    for (let i = 0; i < n; i++) {
        let oddChars = '';
        let evenChars = '';

        for (let j = 0; j < s.length; j++) {
            if (j % 2 === 0) {
                evenChars += s[j];
            } else {
                oddChars += s[j];
            }
        }

        s = oddChars + evenChars;
    }

    return s;
};
export const decrypt = (k, n) => {
    let s = k;
    if (!s || n <= 0) {
        return s;
    }

    for (let i = 0; i < n; i++) {
        const mid = Math.floor(s.length / 2);
        const oddChars = s.slice(0, mid);
        const evenChars = s.slice(mid);

        let decrypted = '';
        for (let j = 0; j < mid; j++) {
            decrypted += evenChars[j] + oddChars[j];
        }

        if (s.length % 2 !== 0) {
            decrypted += evenChars[evenChars.length - 1];
        }

        s = decrypted;
    }

    return s;
};

console.log(decrypt(' Tah itse sits!', 3));
