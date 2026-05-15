import {useQuery} from '@tanstack/react-query';
import {pokemonRepository} from '@/src/repositories/pokemonRepository';

export const usePokemonDetail = (id: string) => {
  return useQuery({
    queryKey: ['pokemon-detail', id],
    queryFn: async () => pokemonRepository.getPokemonDetail(id),
    enabled: Boolean(id),
  });
};
