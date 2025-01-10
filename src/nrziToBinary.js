export default (signal) => {
  const signalArray = [...signal];
  return signalArray.reduce((acc, current, i, arr) => {
    if (current === '|') {
      return acc;
    }
    return arr[i - 1] === '|' ? `${acc}1` : `${acc}0`;
  }, '');
};
