// Using reverse, replaceAll functions and String class
const reverseString1 = (str) => {
  const result = String(str.split("").reverse()).replaceAll(",", "");
  console.log("reversString1 : ", result);
};
// Using reverse and join functions
const reverseString2 = (str) => {
  const result = str.split("").reverse().join("");
  console.log("reversString2 : ", result);
};
// Without using reverse and join functions
const reverseString3 = (str) => {
  let resultArr = [];
  const strArr = str.split("");
  for (let i = strArr.length - 1; i >= 0; i--) {
    resultArr.push(strArr[i]);
  }
  const resultStr = String(resultArr).replaceAll(",", "");
  console.log("reversString3 : ", resultStr);
};

// reverseString1("hello");
// reverseString2("hello");
reverseString3("hello");
