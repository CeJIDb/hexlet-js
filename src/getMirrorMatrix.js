const getMirrorMatrix = (matrix) => {
  const rowCount = matrix.length;
  if (rowCount === 0) {
    return [];
  }

  const colCount = matrix[0].length;
  const middle = colCount / 2;

  const result = matrix.map((row) => row.slice());

  for (const row of result) {
    for (let i = middle; i < colCount; i += 1) {
      const leftIndex = colCount - i - 1;
      row[i] = row[leftIndex];
    }
  }

  return result;
};

export default getMirrorMatrix;
