const readline = require("./readline");

const repetedChar = (str) => {
  let charObj = {};
  for (char of str) {
    charObj[char] = (charObj[char] || 0) + 1;
  }
  const result = Object.keys(charObj)
    .filter((char) => charObj[char] > 1)
    .map((char) =>
      charObj[char] > 1
        ? ` ${char}: is repeated for ${charObj[char]} times`
        : ""
    );
  console.log("result : ", String(result));
};

readline.question("Enter a string : ", (str) => {
  repetedChar(str);
  readline.close();
});
