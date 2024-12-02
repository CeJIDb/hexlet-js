const rotateMatrix = (matrix, direction) => {
  const rowCount = matrix.length;

  if (rowCount === 0) {
    return [];
  }

  const colCount = matrix[0].length;

  const result = Array.from({ length: colCount }, () => []);

  for (let i = 0; i < colCount; i += 1) {
    for (let j = 0; j < rowCount; j += 1) {
      if (direction === 'left') {
        result[i][j] = matrix[j][colCount - i - 1];
      } else if (direction === 'right') {
        result[i][j] = matrix[rowCount - j - 1][i];
      }
    }
  }

  return result;
};

const rotateLeft = (matrix) => rotateMatrix(matrix, 'left');
const rotateRight = (matrix) => rotateMatrix(matrix, 'right');

export { rotateLeft, rotateRight };
