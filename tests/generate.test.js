import generate from '../src/generate.js';

describe('generate', () => {
  test('возвращает строку с индексом 0', () => {
    expect(generate(0)).toEqual([1]);
  });

  test('возвращает строку с индексом 1', () => {
    expect(generate(1)).toEqual([1, 1]);
  });

  test('возвращает строку с индексом 2', () => {
    expect(generate(2)).toEqual([1, 2, 1]);
  });

  test('возвращает строку с индексом 3', () => {
    expect(generate(3)).toEqual([1, 3, 3, 1]);
  });

  test('возвращает строку с индексом 4', () => {
    expect(generate(4)).toEqual([1, 4, 6, 4, 1]);
  });

  test('возвращает строку с индексом 5', () => {
    expect(generate(5)).toEqual([1, 5, 10, 10, 5, 1]);
  });

  test('работает для больших индексов, например 10', () => {
    expect(generate(10)).toEqual([
      1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1,
    ]);
  });

  test('возвращает корректный результат для произвольных индексов', () => {
    expect(generate(6)).toEqual([1, 6, 15, 20, 15, 6, 1]);
    expect(generate(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
  });
});
