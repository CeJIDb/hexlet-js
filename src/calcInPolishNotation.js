const calcInPolishNotation = (arr) => {
  const isNumber = (value) => typeof value === 'number';

  if (arr.length === 1 && isNumber(arr[0])) {
    return arr[0];
  }

  if (arr.length < 3) {
    return null;
  }

  const operands = ['+', '-', '*', '/'];
  const stack = [];

  for (const item of arr) {
    if (isNumber(item)) {
      stack.push(item);
    } else if (operands.includes(item)) {
      if (stack.length < 2) {
        return null;
      }

      const secondNum = stack.pop();
      const firstNum = stack.pop();
      let result = 0;

      switch (item) {
        case '+':
          result = firstNum + secondNum;
          break;
        case '-':
          result = firstNum - secondNum;
          break;
        case '*':
          result = firstNum * secondNum;
          break;
        case '/':
          if (secondNum === 0) {
            return null;
          }
          result = firstNum / secondNum;
          break;
        default:
          return null;
      }

      stack.push(result);
    }
  }

  return stack.length === 1 ? stack[0] : null;
};

export default calcInPolishNotation;
