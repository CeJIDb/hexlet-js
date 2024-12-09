import getLongestLength from '../src/getLongestLength.js'; // Замените 'yourFileName' на имя файла с вашей функцией

describe('getLongestLength', () => {
  test('возвращает длину 0 для пустой строки', () => {
    expect(getLongestLength('')).toBe(0);
  });

  test('возвращает длину строки, если все символы уникальны', () => {
    expect(getLongestLength('abcde')).toBe(5);
  });

  test('находит длину самой длинной последовательности уникальных символов', () => {
    expect(getLongestLength('abcdeef')).toBe(5); // Подстрока 'abcde'
    expect(getLongestLength('jabjcdel')).toBe(7); // Подстрока 'abjcdel'
  });

  test('работает со строками, где все символы одинаковы', () => {
    expect(getLongestLength('aaaaaa')).toBe(1); // Все символы одинаковы, подстрока 'a'
  });

  test('работает со строками, содержащими повторяющиеся символы через промежутки', () => {
    expect(getLongestLength('abcbacbb')).toBe(3); // Подстрока 'abc'
    expect(getLongestLength('pwwkew')).toBe(3); // Подстрока 'wke'
  });

  test('работает со строками, содержащими только один символ', () => {
    expect(getLongestLength('a')).toBe(1); // Подстрока 'a'
    expect(getLongestLength('bbbbbbbb')).toBe(1); // Все символы 'b'
  });

  test('работает со сложными строками', () => {
    expect(getLongestLength('qweqrty')).toBe(6); // Подстрока 'weqrty'
    expect(getLongestLength('dvdf')).toBe(3); // Подстрока 'vdf'
  });
});
