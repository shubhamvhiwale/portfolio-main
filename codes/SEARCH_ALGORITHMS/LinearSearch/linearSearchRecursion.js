// const findIndexOfElementWithRecursion = (arr, elem, index = 0) => {

//     if (index >= arr.length) {
//         return -1;
//     }

//     if (arr[index] === elem) {
//         return index;
//     }

//     return findIndexOfElementWithRecursion(arr, elem, index + 1)

// }

// const arr = [4, 5, 2, 6, 7, 8]
// const result = findIndexOfElementWithRecursion(arr, 5);

// console.log('result : ', result)


const findIndexOfElementWithRecursion = (arr, ele, index = 0) => {

    if (index >= arr.length) {
        return -1
    }

    if (arr[index] === ele) {
        return index
    }

    return findIndexOfElementWithRecursion(arr, ele, index + 1)
}


const arr = [4, 5, 2, 6, 7, 8]
const ele = 2;
const result = findIndexOfElementWithRecursion(arr, ele);
console.log(`index of ${ele} is ${result}`);