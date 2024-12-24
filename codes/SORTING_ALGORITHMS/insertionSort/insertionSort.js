// const insertionSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let numberToInsert = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > numberToInsert) {
//             arr[j + 1] = arr[j]
//             j = j - 1
//         }
//         arr[j + 1] = numberToInsert
//     }
//     return arr;
// }

// const arr = [5, 3, 1, 2, 7];
// const result = insertionSort(arr);
// console.log(result);

// const insertionSort = (arr) => { // [1, 2, 3, 5, 7]
//     debugger
//     for (let i = 0; i < arr.length; i++) { //i = 4
//         let numberToInsert = arr[i]; //numberToInsert = 7
//         let j = i - 1; //j = 3
//         while (j >= 0 && arr[j] > numberToInsert) {
//             arr[j + 1] = arr[j]; //arr[2] = arr[1] 
//             j = j - 1 // j = 0
//         } 
//         arr[j + 1] = numberToInsert //arr[1] = 2
//     }
//     return arr;
// }


const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numberToInsert
    }
    return arr;
}
const arr = [5, 3, 1, 2, 7];
const result = insertionSort(arr);
console.log(result);