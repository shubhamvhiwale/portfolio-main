const findUserBinarySearchRecursive = (arr, id, leftIndex, rightIndex) => {

    if (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (id === arr[middleIndex].id) {
            return arr[middleIndex].name;
        }

        if (id < arr[middleIndex].id) {
            rightIndex = middleIndex - 1
            return findUserRecursive(arr, id, leftIndex, rightIndex);
        } else {
            leftIndex = middleIndex + 1
            return findUserRecursive(arr, id, leftIndex, rightIndex);
        }
    } else {
        return 'not found';
    }
}

const id = 55;
const userArr = [
    { id: 11, name: 'john' },
    { id: 22, name: 'jane' },
    { id: 33, name: 'alex' },
    { id: 44, name: 'toney' },
    { id: 55, name: 'natasha' }
];

const result = findUserBinarySearchRecursive(userArr, id, 0, userArr.length - 1);

console.log(`name of ${id}'s user is ${result}`);


