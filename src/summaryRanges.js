const summaryRanges = (arr) => {
  if (arr.length < 2) {
    return [];
  }

  const result = [];
  let start = arr[0];

  for (let i = 1; i <= arr.length; i += 1) {
    if (i === arr.length || arr[i] !== arr[i - 1] + 1) {
      if (start !== arr[i - 1]) {
        result.push(`${start}->${arr[i - 1]}`);
      }
      start = arr[i];
    }
  }

  return result;
};

export default summaryRanges;
