const validateParentheses = (s) => {
  //   debugger;
  const stack = [];
  const pairs = { "(": ")", "{": "}", "[": "]" };

  for (char of s) {
    if (char in pairs) {
      stack.push(char);
    } else {
      const poppedItem = stack.pop();
      if (pairs[poppedItem] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

const result = validateParentheses("{{([])}[()]}");
console.log("result : ", result);
