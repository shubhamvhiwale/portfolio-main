const recursiveFactorialOfNumber = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * recursiveFactorialOfNumber(n - 1)
}

const result = recursiveFactorialOfNumber(5);
console.log("result : ", result);
