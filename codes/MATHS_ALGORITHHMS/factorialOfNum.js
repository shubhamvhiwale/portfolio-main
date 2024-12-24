const calFactorialOfNumber = (num) => {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    count = count * i;
  }
  return count;
};

console.log("result : ", calFactorialOfNumber(0));
console.log("");
console.log("result : ", calFactorialOfNumber(1));
console.log("result : ", calFactorialOfNumber(4));
