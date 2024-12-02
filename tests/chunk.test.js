import chunk from '../src/chunk.js';

describe('chunk', () => {
  test('разбивает массив на чанки указанного размера', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test('работает с размером чанка больше длины массива', () => {
    expect(chunk(['a', 'b', 'c'], 5)).toEqual([['a', 'b', 'c']]);
  });

  test('возвращает пустой массив, если входной массив пуст', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('работает с размером чанка равным 1', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 1)).toEqual([['a'], ['b'], ['c'], ['d']]);
  });

  test('работает с размером чанка равным длине массива', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 4)).toEqual([['a', 'b', 'c', 'd']]);
  });

  test('возвращает пустой массив, если размер чанка меньше или равен 0', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 0)).toEqual([]);
    expect(chunk(['a', 'b', 'c', 'd'], -1)).toEqual([]);
  });

  test('работает с нечисловыми элементами массива', () => {
    expect(chunk([1, 'b', null, undefined], 2)).toEqual([[1, 'b'], [null, undefined]]);
  });

  test('работает с массивом из одного элемента', () => {
    expect(chunk(['a'], 1)).toEqual([['a']]);
    expect(chunk(['a'], 2)).toEqual([['a']]);
  });

  test('работает с большими массивами', () => {
    const largeArray = Array.from({ length: 1000 }, (_, i) => i);
    expect(chunk(largeArray, 100)).toHaveLength(10);
  });
});
