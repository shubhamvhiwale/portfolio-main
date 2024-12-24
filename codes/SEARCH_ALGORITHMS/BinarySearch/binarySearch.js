// const findIndexOfElementWithBinarySearch = (arr, ele) => {
//     debugger;
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (arr[middleIndex] === ele) {
//             return middleIndex;
//         }

//         if (ele < arr[middleIndex]) {
//             rightIndex = middleIndex - 1
//         } else {
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1;
// }

// const arr = [2, 4, 6, 7, 8, 10, 12];
// const ele = 8;
// const result = findIndexOfElementWithBinarySearch(arr, ele);

// console.log(`idnex of ${ele} is ${result}`)

const findIndexOfElementWithBinarySearch = (arr, ele) => {
    debugger;
    let leftIndex = 0;
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

        if (arr[middleIndex] === ele) {
            return middleIndex;
        }

        if (ele < arr[middleIndex]) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }

    return -1
}
const arr = [-10, 1, 2, 4, 6, 7, 8, 10, 12, 20, 32];
const ele = 4;

const result = findIndexOfElementWithBinarySearch(arr, ele);
console.log(`idnex of ${ele} is ${result}`)

