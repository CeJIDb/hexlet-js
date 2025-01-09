export default (nums, target) => {
  if (nums.length === 0) {
    return null;
  }

  const differences = nums.map((num) => Math.abs(num - target));

  return differences.reduce(
    (minIndex, diff, currentIndex) =>
      diff < differences[minIndex] ? currentIndex : minIndex,
    0,
  );
};
