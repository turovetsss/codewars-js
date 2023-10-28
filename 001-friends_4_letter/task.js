export const friendFind = (listFriends) => {
    const myArr = [];
    for (let i = 0; i < listFriends.length; ++i) {
        const friend = listFriends[i];
        console.log(typeof (friend));
        if (friend.length === 4) {
            myArr.push(friend);
        }
    }
    return myArr;
};

console.log(`2 is even = ${friendFind(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke'])}`);
