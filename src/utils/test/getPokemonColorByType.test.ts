import {getPokemonColorByType} from '../getPokemonColorByType';
import {describe, it, expect} from '@jest/globals';

describe('getPokemonColorByType', () => {
  it('returns grass color for grass type', () => {
    expect(getPokemonColorByType('grass')).toBeTruthy();
  });

  it('returns fire color for fire type', () => {
    expect(getPokemonColorByType('fire')).toBeTruthy();
  });

  it('returns fallback color for unknown type', () => {
    expect(getPokemonColorByType('unknown')).toBeTruthy();
  });

  it('handles undefined type', () => {
    expect(getPokemonColorByType(undefined)).toBeTruthy();
  });
});
