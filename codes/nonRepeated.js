const nonRepeatedChar = (str) => {
  let charObj = {};
  for (let char of str) {
    charObj[char] = (charObj[char] || 0) + 1;
    console.log(char);
  }
  const result = str
    .split("")
    .filter((char) => (charObj[char] === 1 ? char : ""));
  return result;
};

const output = nonRepeatedChar("hheello");
console.log(
  `No Repeated carector${output.length > 1 ? "s Are" : " is"}`,
  output.join(" ")
);
