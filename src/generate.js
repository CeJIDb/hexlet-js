const generate = (num) => {
  if (num < 0) {
    return [];
  }

  let previousRow = [1];

  for (let i = 1; i <= num; i += 1) {
    const currentRow = [];
    for (let j = 0; j <= i; j += 1) {
      const topLeft = previousRow[j - 1] || 0;
      const topRight = previousRow[j] || 0;
      currentRow.push(topLeft + topRight);
    }
    previousRow = currentRow;
  }

  return previousRow;
};

export default generate;
