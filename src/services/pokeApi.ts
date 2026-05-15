import {httpClient} from './apiClient';
import {PokemonDetailResponse, PokemonListResponse} from '@/src/types/pokemon';

const DEFAULT_LIMIT = 20;

export const pokeApi = {
  getPokemons: async (params: {limit?: number; offset?: number}) => {
    try {
      const limit = params.limit ?? DEFAULT_LIMIT;
      const offset = params.offset ?? 0;

      return httpClient.get<PokemonListResponse>('/pokemon', {
        offset,
        limit,
      });
    } catch (e) {
      throw e;
    }
  },

  getPokemonDetail: async (nameOrId: string) => {
    return httpClient.get<PokemonDetailResponse>(`/pokemon/${nameOrId}`);
  },
};
