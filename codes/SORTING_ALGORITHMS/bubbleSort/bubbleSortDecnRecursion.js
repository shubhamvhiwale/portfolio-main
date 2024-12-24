
const bubbleSortDecendingRecursion = (arr) => {
    let swapped;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
        }
    }

    if (swapped) {
        return bubbleSortDecendingRecursion(arr)
    } else {
        return arr
    }
}

const arr = [5, 3, 1, 2, 7]
const result = bubbleSortDecendingRecursion(arr);
console.log('Result : ', result);
