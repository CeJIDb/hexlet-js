const getLongestLength = (str) => {
  if (str === '') return 0;

  let start = 0;
  let maxLength = 0;
  const seen = new Set();

  for (let end = 0; end < str.length; end += 1) {
    while (seen.has(str[end])) {
      seen.delete(str[start]);
      start += 1;
    }
    seen.add(str[end]);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

export default getLongestLength;
