import {useInfiniteQuery} from '@tanstack/react-query';
import {pokemonRepository} from '@/src/repositories/pokemonRepository';

export const usePokemons = () => {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    initialPageParam: 0,
    queryFn: async ({pageParam}) => pokemonRepository.getPokemon(pageParam),
    getNextPageParam: lastPage => lastPage.nextOffset,
  });
};
