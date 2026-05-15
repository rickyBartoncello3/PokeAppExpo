import {pokeApi} from '@/src/services/pokeApi';
import {pokemonMappers} from '@/src/utils/mappers/pokemonMappers';
import {pokemonsLocalDataSource} from '@/src/storage/database/local/pokemons/pokemonsLocalDataSource';

const LIMIT = Number(process.env.EXPO_PUBLIC_POKEMON_LIMIT || 20);

export const pokemonRepository = {
  async getPokemon(pageParam: number) {
    try {
      const response = await pokeApi.getPokemons({
        limit: LIMIT,
        offset: pageParam,
      });

      const favoriteIds = await pokemonsLocalDataSource.findFavoriteIds();
      const favoriteIdsSet = new Set(favoriteIds);

      const results = await Promise.all(
        response.results.map(async pokemon => {
          const detail = await pokeApi.getPokemonDetail(pokemon.name);
          const isFavorite = favoriteIdsSet.has(String(detail.id));
          return pokemonMappers.listItemWithDetailToDomain(pokemon, {
            ...detail,
            isFavorite,
          });
        }),
      );

      await pokemonsLocalDataSource.upsert(results.map(pokemonMappers.domainToRow));

      return {
        nextOffset: response.next ? pageParam + LIMIT : null,
        results,
        fromCache: false,
      };
    } catch (e) {
      const cachedResults = await pokemonsLocalDataSource.findAll();

      if (cachedResults.length > 0 && pageParam === 0) {
        return {
          results: cachedResults.map(pokemonMappers.rowToDomain),
          nextOffset: null,
          fromCache: true,
        };
      }

      throw new Error('Could not find pokemon list');
    }
  },

  async getPokemonDetail(id: string) {
    try {
      const response = await pokeApi.getPokemonDetail(id);
      const pokemonRow = await pokemonsLocalDataSource.findById(id);
      if (pokemonRow) {
        const pokemonDetail = pokemonMappers.rowToDomain(pokemonRow);
        return pokemonMappers.detailToDomain({
          ...response,
          isFavorite: pokemonDetail.isFavorite,
        });
      }
      return pokemonMappers.detailToDomain(response);
    } catch (e) {
      throw new Error('Could not find pokemon detail');
    }
  },

  async toggleFavorite(pokemonId: string) {
    await pokemonsLocalDataSource.toggleFavorite(pokemonId);
    return pokemonId;
  },
};
