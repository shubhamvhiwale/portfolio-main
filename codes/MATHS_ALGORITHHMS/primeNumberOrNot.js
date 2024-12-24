const primeNumberOrNot__ = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 10; j++) {
      if (i * j === n) {
        count++;
      }
    }
  }
  if (count <= 2) {
    return true;
  } else {
    return false;
  }
};

const primeNumberOrNot = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(primeNumberOrNot(5) ? "Prime number" : "Not Prime number");
console.log(primeNumberOrNot(4) ? "Prime number" : "Not Prime number");
console.log(primeNumberOrNot(5449) ? "Prime number" : "Not Prime number");
