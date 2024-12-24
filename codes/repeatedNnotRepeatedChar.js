const readline = require("./readline");

const repeatedNnotRepeatedChar = (str) => {
  let charObj = {};
  for (let char of str) {
    charObj[char] = (charObj[char] || 0) + 1;
  }
  const multiChars = Object.keys(charObj).filter((char) => charObj[char] > 1);
  const singalChars = Object.keys(charObj).filter(
    (char) => charObj[char] === 1
  );
  console.log("multiChars : ", String(multiChars));
  console.log("singalChars : ", String(singalChars));
};

readline.question("Enter a string : ", (str) => {
  repeatedNnotRepeatedChar(str);
  readline.close();
});
