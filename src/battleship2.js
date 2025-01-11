import _ from 'lodash';

const countShipsInRow = (field) =>
  _.sum(
    field.flatMap(
      (line) =>
        line
          .join('')
          .split('0')
          .filter((ship) => ship !== '').length,
    ),
  );

const countShips = (field) => {
  const decks = field.flat().filter((deck) => deck === 1).length;
  if (decks === 0) {
    return 0;
  }

  if (decks === 1) {
    return 1;
  }

  const shipsInRow = countShipsInRow(field);
  const transposedField = _.zip(field).flat();
  const shipsInCol = countShipsInRow(transposedField);

  return shipsInRow + shipsInCol - decks + 1;
};

export default countShips;
