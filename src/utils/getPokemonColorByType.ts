import {backgroundColor} from '@/src/constants/pokemonTypeColors';

export const getPokemonColorByType = (type?: string) => {
  return backgroundColor[type ?? 'normal'] ?? '#F3F4F6';
};
