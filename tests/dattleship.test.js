import { calcShipsCount, isValidField } from '../src/battleship.js';

describe('calcShipsCount', () => {
  test('returns 0 for empty field', () => {
    expect(calcShipsCount([])).toBe(0);
    expect(calcShipsCount([[0, 0], [0, 0]])).toBe(0);
  });

  test('counts ships correctly for a single ship', () => {
    expect(calcShipsCount([[1, 0], [0, 0]])).toBe(1);
  });

  test('counts multiple ships correctly', () => {
    expect(
      calcShipsCount([
        [0, 1, 0, 0],
        [0, 1, 0, 1],
        [0, 0, 0, 1],
        [1, 0, 0, 1],
      ]),
    ).toBe(3);
  });

  test('handles complex fields', () => {
    expect(
      calcShipsCount([
        [0, 1, 0, 0, 0, 0],
        [0, 1, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 1],
        [0, 0, 0, 0, 0, 1],
        [1, 1, 0, 1, 0, 0],
      ]),
    ).toBe(6);
  });
});

describe('isValidField', () => {
  test('validates single ship', () => {
    expect(isValidField([[1]])).toBe(true);
    expect(
      isValidField([
        [0, 1],
        [0, 0],
      ]),
    ).toBe(true);
  });

  test('validates correctly placed ships', () => {
    expect(
      isValidField([
        [0, 1, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 0],
        [0, 1, 1, 1],
      ]),
    ).toBe(true);
  });

  test('detects invalid ship placements (diagonal contact)', () => {
    expect(
      isValidField([
        [0, 1, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 1, 1, 1],
      ]),
    ).toBe(false);
  });

  test('detects invalid ship placements (direct contact)', () => {
    expect(
      isValidField([
        [0, 1, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 1],
      ]),
    ).toBe(false);
  });
});
