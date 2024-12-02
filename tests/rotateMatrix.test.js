import { rotateLeft, rotateRight } from '../src/rotateMatrix.js';

describe('Matrix Rotation Tests', () => {
  test('rotateLeft rotates the matrix 90 degrees counterclockwise', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 0, 1, 2],
    ];
    const expected = [
      [4, 8, 2],
      [3, 7, 1],
      [2, 6, 0],
      [1, 5, 9],
    ];
    expect(rotateLeft(matrix)).toEqual(expected);
  });

  test('rotateRight rotates the matrix 90 degrees clockwise', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 0, 1, 2],
    ];
    const expected = [
      [9, 5, 1],
      [0, 6, 2],
      [1, 7, 3],
      [2, 8, 4],
    ];
    expect(rotateRight(matrix)).toEqual(expected);
  });

  test('rotateLeft works for square matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [2, 4],
      [1, 3],
    ];
    expect(rotateLeft(matrix)).toEqual(expected);
  });

  test('rotateRight works for square matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [3, 1],
      [4, 2],
    ];
    expect(rotateRight(matrix)).toEqual(expected);
  });

  test('rotateLeft works for 1x1 matrix', () => {
    const matrix = [[1]];
    const expected = [[1]];
    expect(rotateLeft(matrix)).toEqual(expected);
  });

  test('rotateRight works for 1x1 matrix', () => {
    const matrix = [[1]];
    const expected = [[1]];
    expect(rotateRight(matrix)).toEqual(expected);
  });

  test('rotateLeft works for an empty matrix', () => {
    const matrix = [];
    const expected = [];
    expect(rotateLeft(matrix)).toEqual(expected);
  });

  test('rotateRight works for an empty matrix', () => {
    const matrix = [];
    const expected = [];
    expect(rotateRight(matrix)).toEqual(expected);
  });

  test('Original matrix remains unchanged after rotateLeft and rotateRight', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const matrixCopy = JSON.parse(JSON.stringify(matrix)); // Deep copy
    rotateLeft(matrix);
    rotateRight(matrix);
    expect(matrix).toEqual(matrixCopy);
  });
});
