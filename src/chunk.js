const chunk = (arr, n) => {
  const { length } = arr;
  if (length === 0 || n <= 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < length; i += n) {
    result.push(arr.slice(i, i + n));
  }

  return result;
};

export default chunk;
