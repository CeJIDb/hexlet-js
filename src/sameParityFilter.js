const isEven = (num) => num % 2 === 0;

export default (arr) => {
  const fistItemParity = isEven(arr[0]);
  return arr.filter((num) => isEven(num) === fistItemParity);
};
