const multiply = (matrixA, matrixB) => {
  const matrixARows = matrixA.length;
  const matrixBRows = matrixB.length;
  const matrixACols = matrixA[0]?.length || 0;
  const matrixBCols = matrixB[0]?.length || 0;

  if (matrixARows === 0 || matrixACols === 0 || matrixBCols === 0) {
    return [];
  }

  const areMatricesCompatible = matrixACols === matrixBRows;
  if (!areMatricesCompatible) {
    return null;
  }

  const result = Array.from({ length: matrixARows }, () => Array(matrixBCols).fill(0));

  for (let i = 0; i < matrixARows; i += 1) {
    for (let j = 0; j < matrixBCols; j += 1) {
      let sum = 0;
      for (let k = 0; k < matrixACols; k += 1) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
};

export default multiply;
