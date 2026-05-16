import {capitalize} from '../capitalize';
import {describe, it, expect} from '@jest/globals';

describe('capitalize', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('pikachu')).toBe('Pikachu');
  });

  it('returns empty string when value is empty', () => {
    expect(capitalize('')).toBe('');
  });

  it('does not modify already capitalized values', () => {
    expect(capitalize('Pikachu')).toBe('Pikachu');
  });
});
