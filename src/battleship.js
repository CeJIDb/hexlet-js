const isValidField = (field) => {
  const rows = field.length;
  const cols = field[0]?.length || 0;

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (field[i][j] === 1) {
        if (
          (field[i - 1]?.[j - 1] === 1)
          || (field[i - 1]?.[j + 1] === 1)
          || (field[i + 1]?.[j - 1] === 1)
          || (field[i + 1]?.[j + 1] === 1)
        ) {
          return false;
        }
      }
    }
  }

  return true;
};

const calcShipsCount = (field) => {
  const rows = field.length;
  const cols = field[0]?.length || 0;
  let shipsCount = 0;

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (
        field[i][j] === 1
        && (field[i - 1]?.[j] !== 1)
        && (field[i][j - 1] !== 1)
      ) {
        shipsCount += 1;
      }
    }
  }

  return shipsCount;
};

export { isValidField, calcShipsCount };
