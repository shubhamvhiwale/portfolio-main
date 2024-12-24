// Problem : Given ans array of 'n' elements and a target elements 't' find the index of 't' in the array.
// Return  - 1 if the target element is not found. 

// found index of element using inbuild method
const findIndexOfElement = (arr, elem) => {
    return arr.indexOf(elem);
}

// found index of element without using any inbuild method
const findIndexOfElement2 = (arr, elem) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i
        }
    }
    return -1;
}

const arr = [4, 5, 2, 6, 7, 8]
const result = findIndexOfElement2(arr, 2)
console.log('result : ', result);