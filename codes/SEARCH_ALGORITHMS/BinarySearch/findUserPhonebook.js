const findUserPhone = (arr, user) => {
    let sortedData = phonebook.sort((a, b) => a.name.localeCompare(b.name));
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (user.toLowerCase() === arr[middleIndex].name.toLowerCase()) {
            return arr[middleIndex].phone;
        }

        if (user.toLowerCase() < arr[middleIndex].name.toLowerCase()) {
            rightIndex = middleIndex - 1
        } else {
            leftIndex = middleIndex + 1
        }
    }

    return -1;
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
const result = findUserPhone(phonebook, user)
console.log('Result : ', result);
