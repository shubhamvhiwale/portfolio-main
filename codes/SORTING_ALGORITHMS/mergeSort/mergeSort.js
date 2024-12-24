const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

const merge = (left, right) => {
    let result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right[0]) {
            result.push(left.shift())

        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

const arr = [8, 20, -2, 4, -6]
console.log(mergeSort(arr))