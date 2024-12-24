//find a index of element using binary search with recursion.

const binarySearchWithRecursion = (arr, ele, leftIndex, rightIndex) => {
    // debuggerk
    if (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] === ele) {
            return middleIndex;
        }

        if (ele < arr[middleIndex]) {
            rightIndex = middleIndex - 1
            return binarySearchWithRecursion(arr, ele, leftIndex, rightIndex)
        } else {
            leftIndex = middleIndex + 1
            return binarySearchWithRecursion(arr, ele, leftIndex, rightIndex)
        }
    } else {
        return -1
    }

}

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const ele = 3;
const result = binarySearchWithRecursion(arr, ele, 0, arr.length - 1);
console.log(`index of ${ele} is ${result}`)