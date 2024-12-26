import buildSnailPath from '../src/snail.js';

describe('buildSnailPath', () => {
  it('should return the snail path for a 2x2 matrix', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const result = buildSnailPath(matrix);
    expect(result).toEqual([1, 2, 4, 3]);
  });

  it('should return the snail path for a 3x4 matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const result = buildSnailPath(matrix);
    expect(result).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });

  it('should return an empty array for an empty matrix', () => {
    const matrix = [];
    const result = buildSnailPath(matrix);
    expect(result).toEqual([]);
  });

  it('should return the snail path for a 1x1 matrix', () => {
    const matrix = [
      [1],
    ];
    const result = buildSnailPath(matrix);
    expect(result).toEqual([1]);
  });

  it('should return the snail path for a 3x3 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = buildSnailPath(matrix);
    expect(result).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });
});
