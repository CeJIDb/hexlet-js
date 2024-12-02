import compareVersion from '../src/compareVersion.js';

describe('compareVersion', () => {
  test('returns -1 when version1 < version2 (different minor versions)', () => {
    expect(compareVersion('0.1', '0.2')).toBe(-1);
  });

  test('returns 1 when version1 > version2 (different minor versions)', () => {
    expect(compareVersion('0.2', '0.1')).toBe(1);
  });

  test('returns 0 when version1 === version2', () => {
    expect(compareVersion('4.2', '4.2')).toBe(0);
  });

  test('returns -1 when version1 < version2 (different major versions)', () => {
    expect(compareVersion('0.9', '1.0')).toBe(-1);
  });

  test('returns 1 when version1 > version2 (different major versions)', () => {
    expect(compareVersion('2.0', '1.9')).toBe(1);
  });

  test('handles complex cases correctly', () => {
    expect(compareVersion('1.11', '1.2')).toBe(1);
    expect(compareVersion('1.2', '1.11')).toBe(-1);
    expect(compareVersion('0.12', '0.2')).toBe(1);
    expect(compareVersion('0.2', '0.12')).toBe(-1);
  });

  test('handles edge cases with leading zeros', () => {
    expect(compareVersion('01.2', '1.2')).toBe(0);
    expect(compareVersion('1.02', '1.2')).toBe(0);
    expect(compareVersion('1.10', '1.2')).toBe(1);
    expect(compareVersion('1.2', '1.10')).toBe(-1);
  });
});
