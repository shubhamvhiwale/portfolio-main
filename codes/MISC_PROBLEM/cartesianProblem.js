const cartesianProblem = (arr1, arr2) => {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]]);
        }
    }
    return result;
}

let arr1 = [1, 2];
let arr2 = [4, 5, 6];

const result = cartesianProblem(arr1, arr2);
console.log("Sets of array : ", result);
