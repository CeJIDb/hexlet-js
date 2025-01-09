import reverse from '../src/reverse.js';

describe('reverse', () => {
  it('should work', () => {
    expect(reverse('hexlet')).toBe('telxeh');
    expect(reverse('abs')).toBe('sba');
    expect(reverse('ab')).toBe('ba');
  });

  it('empty string', () => {
    expect(reverse('')).toBe('');
  });
});
