const userArr = [
    { id: 11, name: 'john' },
    { id: 22, name: 'jane' },
    { id: 33, name: 'alex' },
    { id: 44, name: 'toney' },
    { id: 55, name: 'natasha' }
];

const idToFind = 44;

function binarySearch(arr, id) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = arr[mid].id;

        if (midValue === id) {
            return arr[mid]; // Found the user
        } else if (midValue < id) {
            low = mid + 1; // Search the right half
        } else {
            high = mid - 1; // Search the left half
        }
    }

    return null; // User not found
}

const result = binarySearch(userArr, idToFind);
console.log(result);
