import summaryRanges from '../src/summaryRanges.js';

describe('summaryRanges', () => {
  test('should return an empty array for an empty input array', () => {
    expect(summaryRanges([])).toEqual([]);
  });

  test('should return an empty array for a single element array', () => {
    expect(summaryRanges([1])).toEqual([]);
  });

  test('should return "1->3" for a continuous range from 1 to 3', () => {
    expect(summaryRanges([1, 2, 3])).toEqual(['1->3']);
  });

  test('should return ["0->2", "4->5"] for two ranges [0,1,2] and [4,5]', () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5']);
  });

  test('should return ["110->112", "-5->-4"] for the ranges [110, 111, 112] and [-5, -4]', () => {
    expect(summaryRanges([110, 111, 112, 111, -5, -4, -2, -3, -4, -5])).toEqual(['110->112', '-5->-4']);
  });

  test('should return ["1->3", "5->7"] for non-continuous sequences', () => {
    expect(summaryRanges([1, 2, 3, 5, 6, 7])).toEqual(['1->3', '5->7']);
  });

  test('should return ["-1->1"] for a range from -1 to 1', () => {
    expect(summaryRanges([-1, 0, 1])).toEqual(['-1->1']);
  });

  test('should return an empty array for an array with no ranges', () => {
    expect(summaryRanges([1, 3, 5, 7])).toEqual([]);
  });
});
