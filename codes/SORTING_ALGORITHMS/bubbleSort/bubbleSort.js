// const bubbleSort = (arr) => {
//     let swapped;
//     do {
//         swapped = false;
//         for (let i = 0; i < arr.length - 1; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 let temp = arr[i];
//                 arr[i] = arr[i + 1];
//                 arr[i + 1] = temp;
//                 swapped = true;
//             }
//         }
//     } while (swapped)

//     return arr
// }

const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped)

    return arr
}


const arr = [5, 3, 1, 2, 7]
const result = bubbleSort(arr);

console.log(result);


