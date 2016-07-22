let bubbleSort = (list) => {

    let swap = (a, b) => {
        let temp = list[a];
        list[a] = list[b];
        list[b] = temp;
    }

    for (let i = 0; i < list.length; i++) {
        for (let j = list.length - 1; j >= i; j--) {
            if (list[j] < list[j - 1]) {
                swap(j, j - 1);
            }
        }
    }

    return list;

}


module.exports = bubbleSort;