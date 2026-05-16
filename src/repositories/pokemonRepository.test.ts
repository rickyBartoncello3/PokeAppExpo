import {pokemonRepository} from './pokemonRepository';
import {pokeApi} from '@/src/services/pokeApi';
import {pokemonsLocalDataSource} from '@/src/storage/database/local/pokemons/pokemonsLocalDataSource';

jest.mock('@/src/services/pokeApi', () => ({
  pokeApi: {
    getPokemons: jest.fn(),
    getPokemonDetail: jest.fn(),
  },
}));

jest.mock('@/src/storage/database/local/pokemons/pokemonsLocalDataSource', () => ({
  pokemonsLocalDataSource: {
    findFavoriteIds: jest.fn(),
    findAll: jest.fn(),
    upsert: jest.fn(),
  },
}));

describe('pokemonRepository', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getPokemon', () => {
    it('fetches pokemons, enriches them with detail and stores them locally', async () => {
      jest.mocked(pokeApi.getPokemons).mockResolvedValueOnce({
        count: 2,
        next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
        previous: null,
        results: [
          {
            name: 'bulbasaur',
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
          },
          {
            name: 'charmander',
            url: 'https://pokeapi.co/api/v2/pokemon/4/',
          },
        ],
      } as any);

      jest.mocked(pokemonsLocalDataSource.findFavoriteIds).mockResolvedValueOnce(['1']);

      jest
        .mocked(pokeApi.getPokemonDetail)
        .mockResolvedValueOnce({
          id: 1,
          name: 'bulbasaur',
          sprites: {
            front_default: 'bulbasaur-front.png',
            other: {
              'official-artwork': {
                front_default: 'bulbasaur-official.png',
              },
            },
          },
          types: [
            {
              type: {
                name: 'grass',
              },
            },
            {
              type: {
                name: 'poison',
              },
            },
          ],
        } as any)
        .mockResolvedValueOnce({
          id: 4,
          name: 'charmander',
          sprites: {
            front_default: 'charmander-front.png',
            other: {
              'official-artwork': {
                front_default: 'charmander-official.png',
              },
            },
          },
          types: [
            {
              type: {
                name: 'fire',
              },
            },
          ],
        } as any);

      const result = await pokemonRepository.getPokemon(0);

      expect(pokeApi.getPokemons).toHaveBeenCalledWith({
        limit: expect.any(Number),
        offset: 0,
      });

      expect(pokeApi.getPokemonDetail).toHaveBeenCalledTimes(2);
      expect(pokemonsLocalDataSource.upsert).toHaveBeenCalledTimes(1);

      expect(result.nextOffset).toBe(20);

      expect(result.results[0]).toEqual(
        expect.objectContaining({
          id: '1',
          name: 'bulbasaur',
          types: ['grass', 'poison'],
          isFavorite: true,
        }),
      );

      expect(result.results[1]).toEqual(
        expect.objectContaining({
          id: '4',
          name: 'charmander',
          types: ['fire'],
          isFavorite: false,
        }),
      );
    });

    it('returns cached results when api fails and cache exists', async () => {
      jest.mocked(pokeApi.getPokemons).mockRejectedValueOnce(new Error('Network error'));

      jest.mocked(pokemonsLocalDataSource.findAll).mockResolvedValueOnce([
        {
          id: '1',
          name: 'Bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
          number: '#001',
          image_url: 'image.png',
          types: JSON.stringify(['Grass', 'Poison']),
          color: '#A7F3D0',
          is_favorite: 1,
        },
      ] as any);

      const result = await pokemonRepository.getPokemon(0);

      expect(result.nextOffset).toBe(null);
      expect(result.results[0]).toEqual(
        expect.objectContaining({
          id: '1',
          name: 'Bulbasaur',
          isFavorite: true,
        }),
      );
    });

    it('throws when api fails and cache is empty', async () => {
      jest.mocked(pokeApi.getPokemons).mockRejectedValueOnce(new Error('Network error'));
      jest.mocked(pokemonsLocalDataSource.findAll).mockResolvedValueOnce([]);

      await expect(pokemonRepository.getPokemon(0)).rejects.toThrow(
        'Could not find pokemon list',
      );
    });
  });
});
