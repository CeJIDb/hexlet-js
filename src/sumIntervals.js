const sumIntervals = (arr) => {
  if (arr.length === 0) {
    return 0;
  }

  const sortedIntervals = [...arr].sort((a, b) => a[0] - b[0]);
  let totalLength = 0;
  let [currentStart, currentEnd] = sortedIntervals[0];

  for (const [start, end] of sortedIntervals) {
    if (start > currentEnd) {
      totalLength += currentEnd - currentStart;
      [currentStart, currentEnd] = [start, end];
    } else {
      currentEnd = Math.max(currentEnd, end);
    }
  }

  totalLength += currentEnd - currentStart;

  return totalLength;
};

export default sumIntervals;
