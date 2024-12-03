import multiply from '../src/multiply.js';

describe('Matrix multiplication', () => {
  test('Multiplies two square matrices', () => {
    const matrixA = [
      [1, 2],
      [3, 2],
    ];
    const matrixB = [
      [3, 2],
      [1, 1],
    ];
    const expected = [
      [5, 4],
      [11, 8],
    ];
    expect(multiply(matrixA, matrixB)).toEqual(expected);
  });

  test('Multiplies two rectangular matrices', () => {
    const matrixA = [
      [2, 5],
      [6, 7],
      [1, 8],
    ];
    const matrixB = [
      [1, 2, 1],
      [0, 1, 0],
    ];
    const expected = [
      [2, 9, 2],
      [6, 19, 6],
      [1, 10, 1],
    ];
    expect(multiply(matrixA, matrixB)).toEqual(expected);
  });

  test('Returns an empty matrix when multiplying empty matrices', () => {
    expect(multiply([], [])).toEqual([]);
  });

  test('Handles matrices with single elements (1x1)', () => {
    const matrixA = [[2]];
    const matrixB = [[3]];
    const expected = [[6]];
    expect(multiply(matrixA, matrixB)).toEqual(expected);
  });

  test('Returns null for incompatible matrices', () => {
    const matrixA = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const matrixB = [
      [1, 2],
      [3, 4],
    ];
    expect(multiply(matrixA, matrixB)).toBeNull();
  });

  test('Returns the correct result for non-square but compatible matrices', () => {
    const matrixA = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const matrixB = [
      [7, 8],
      [9, 10],
      [11, 12],
    ];
    const expected = [
      [58, 64],
      [139, 154],
    ];
    expect(multiply(matrixA, matrixB)).toEqual(expected);
  });

  test('Handles matrices with zeroes', () => {
    const matrixA = [
      [0, 0],
      [0, 0],
    ];
    const matrixB = [
      [0, 0],
      [0, 0],
    ];
    const expected = [
      [0, 0],
      [0, 0],
    ];
    expect(multiply(matrixA, matrixB)).toEqual(expected);
  });
});
