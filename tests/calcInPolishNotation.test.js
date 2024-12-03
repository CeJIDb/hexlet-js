import calcInPolishNotation from '../src/calcInPolishNotation.js';

describe('calcInPolishNotation', () => {
  test('Корректно вычисляет базовые выражения', () => {
    expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])).toBe(15);
    expect(calcInPolishNotation([7, 2, 3, '*', '-'])).toBe(1);
    expect(calcInPolishNotation([10, 2, '/'])).toBe(5); // Деление
    expect(calcInPolishNotation([8, 2, '/', 3, '*', 1, '+'])).toBe(13); // Смешанное
  });

  test('Возвращает null при делении на 0', () => {
    expect(calcInPolishNotation([4, 0, '/'])).toBeNull();
    expect(calcInPolishNotation([1, 2, '+', 3, 0, '/', '*'])).toBeNull();
  });

  test('Корректно работает с отрицательными числами', () => {
    expect(calcInPolishNotation([-5, 2, '+', 3, '*'])).toBe(-9);
    expect(calcInPolishNotation([-4, -2, '*', 6, '+'])).toBe(14);
    expect(calcInPolishNotation([-10, 2, '/'])).toBe(-5); // Деление с отрицательными
  });

  test('Возвращает null для некорректного ввода', () => {
    expect(calcInPolishNotation([1, '+', 2])).toBeNull(); // Недостаточно операндов
    expect(calcInPolishNotation(['+', 1, 2])).toBeNull(); // Оператор перед операндами
  });

  test('Работает для единичных значений', () => {
    expect(calcInPolishNotation([42])).toBe(42); // Один элемент
  });

  test('Возвращает null для пустого ввода', () => {
    expect(calcInPolishNotation([])).toBeNull();
  });
});
