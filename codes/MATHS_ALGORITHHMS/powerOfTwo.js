const powerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

const powerOfTwoBitwise = (n) => {
  debugger;
  if (n < 1) {
    return false;
  }
  const cal = n & (n - 1);
  const result = cal === 0;
  return result;
};

console.log(powerOfTwoBitwise(8));
console.log(powerOfTwoBitwise(1));
console.log(powerOfTwoBitwise(5));
console.log(powerOfTwoBitwise(2));
console.log(powerOfTwoBitwise(13));
