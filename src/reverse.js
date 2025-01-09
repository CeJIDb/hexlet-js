export default (str) => {
  const { length } = str;

  const iter = (counter, acc) => {
    if (counter === -1) {
      return acc;
    }

    return iter(counter - 1, acc + str[counter]);
  };

  return iter(length - 1, '');
};
