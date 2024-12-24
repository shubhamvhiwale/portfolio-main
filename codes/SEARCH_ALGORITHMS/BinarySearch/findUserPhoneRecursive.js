const findUserPhoneRecursive = (arr, user, leftIndex, rightIndex) => {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (leftIndex <= rightIndex) {
        if (user.toLowerCase() === arr[middleIndex].name.toLowerCase()) {
            return arr[middleIndex].phone
        }

        if (user.toLowerCase() < arr[middleIndex].name.toLowerCase()) {
            rightIndex = rightIndex - 1;
            return findUserPhoneRecursive(arr, user, leftIndex, rightIndex)
        } else {
            leftIndex = leftIndex + 1;
            return findUserPhoneRecursive(arr, user, leftIndex, rightIndex)
        }
    } else {
        return -1;
    }
}

const phonebook = [
    { name: 'Alex', phone: '9876543210' },
    { name: 'Toney', phone: '8876543211' },
    { name: 'Natasha', phone: '8877543211' },
    { name: 'Bruce', phone: '7777543219' },
    { name: 'Steav', phone: '7788540019' },
    { name: 'Thor', phone: '8999540019' },
    { name: 'Nick', phone: '9999540019' },
]
const user = "bruce";
const result = findUserPhoneRecursive(phonebook, user, 0, phonebook.length - 1)
console.log('Result : ', result);