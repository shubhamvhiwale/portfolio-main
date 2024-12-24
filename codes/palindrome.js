const readline = require("./readline");

const palindrome = (str) => {
  const reverseStr = str.split("").reverse().join("");
  const result =
    reverseStr === str ? "String is palindrom" : "String is not palindrom";
  console.log(result);
};

readline.question(`Enter a string? \n`, (str) => {
  palindrome(str);
  readline.close();
});
