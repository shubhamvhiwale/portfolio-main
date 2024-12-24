// const quickSort = (arr) => { // [5, 3, 7, 2, 1]
//     debugger;
//     if (arr.length < 2) {
//         return arr
//     }
//     let pivotElement = arr[arr.length - 1] // pivotElement = 1
//     let left = []; //[]
//     let right = []; //[]
//     for (let i = 0; i < arr.length - 1; i++) { // i = 0
//         if (arr[i] < pivotElement) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivotElement, ...quickSort(right)];
// }

// const arr = [5, 3, 7, 2, 1];
// const result = quickSort(arr);
// console.log(result);

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1]
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

const arr = [5, 3, 7, 2, 1];
const result = quickSort(arr);
console.log(result);


