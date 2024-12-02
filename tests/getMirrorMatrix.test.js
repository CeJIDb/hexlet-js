/* eslint-disable no-shadow */
/* eslint-disable max-len */
import getMirrorMatrix from '../src/getMirrorMatrix.js';

describe('getMirrorMatrix', () => {
  test('Корректно обрабатывает квадратную матрицу 4x4', () => {
    const matrix = [
      [11, 12, 13, 14],
      [21, 22, 23, 24],
      [31, 32, 33, 34],
      [41, 42, 43, 44],
    ];
    const expected = [
      [11, 12, 12, 11],
      [21, 22, 22, 21],
      [31, 32, 32, 31],
      [41, 42, 42, 41],
    ];
    expect(getMirrorMatrix(matrix)).toEqual(expected);
  });

  test('Обрабатывает матрицу 2x2', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [1, 1],
      [3, 3],
    ];
    expect(getMirrorMatrix(matrix)).toEqual(expected);
  });

  test('Обрабатывает матрицу 6x6', () => {
    const matrix = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, 36],
    ];
    const expected = [
      [1, 2, 3, 3, 2, 1],
      [7, 8, 9, 9, 8, 7],
      [13, 14, 15, 15, 14, 13],
      [19, 20, 21, 21, 20, 19],
      [25, 26, 27, 27, 26, 25],
      [31, 32, 33, 33, 32, 31],
    ];
    expect(getMirrorMatrix(matrix)).toEqual(expected);
  });

  test('Работает с матрицей, содержащей одинаковые элементы', () => {
    const matrix = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    const expected = [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ];
    expect(getMirrorMatrix(matrix)).toEqual(expected);
  });

  test('Возвращает пустую матрицу для пустого входного массива', () => {
    const matrix = [];
    const expected = [];
    expect(getMirrorMatrix(matrix)).toEqual(expected);
  });

  test('Корректно работает с матрицей 8x8', () => {
    const matrix = Array.from({ length: 8 }, (_, i) => Array.from({ length: 8 }, (_, j) => i * 8 + j + 1));
    const expected = matrix.map((row) => [...row.slice(0, row.length / 2), ...row.slice(0, row.length / 2).reverse()]);
    expect(getMirrorMatrix(matrix)).toEqual(expected);
  });
});
