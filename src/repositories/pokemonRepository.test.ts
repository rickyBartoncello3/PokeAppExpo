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
    findById: jest.fn(),
    upsert: jest.fn(),
    toggleFavorite: jest.fn(),
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
  describe('getPokemonDetail', () => {
    it('fetches pokemon detail and preserves favorite state from local database', async () => {
      jest.mocked(pokeApi.getPokemonDetail).mockResolvedValueOnce({
        id: 1,
        name: 'bulbasaur',
        height: 7,
        weight: 69,
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
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
            },
          },
          {
            slot: 2,
            type: {
              name: 'poison',
              url: 'https://pokeapi.co/api/v2/type/4/',
            },
          },
        ],
        abilities: [
          {
            ability: {
              name: 'overgrow',
              url: 'https://pokeapi.co/api/v2/ability/65/',
            },
            is_hidden: false,
            slot: 1,
          },
        ],
        stats: [
          {
            base_stat: 45,
            effort: 0,
            stat: {
              name: 'hp',
              url: 'https://pokeapi.co/api/v2/stat/1/',
            },
          },
          {
            base_stat: 49,
            effort: 0,
            stat: {
              name: 'attack',
              url: 'https://pokeapi.co/api/v2/stat/2/',
            },
          },
        ],
      } as any);

      jest.mocked(pokemonsLocalDataSource.findById).mockResolvedValueOnce({
        id: '1',
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
        number: '#001',
        image_url: 'bulbasaur-official.png',
        types: JSON.stringify(['grass', 'poison']),
        color: '#A7F3D0',
        is_favorite: 1,
      } as any);

      const result = await pokemonRepository.getPokemonDetail('1');

      expect(pokeApi.getPokemonDetail).toHaveBeenCalledWith('1');
      expect(pokemonsLocalDataSource.findById).toHaveBeenCalledWith('1');
      expect(result.types).toEqual(['grass', 'poison']);
    });

    it('throws when pokemon detail request fails', async () => {
      jest
        .mocked(pokeApi.getPokemonDetail)
        .mockRejectedValueOnce(new Error('Network error'));

      await expect(pokemonRepository.getPokemonDetail('1')).rejects.toThrow(
        'Could not find pokemon detail',
      );
    });
  });

  describe('toggleFavorite', () => {
    it('toggles favorite state and returns pokemon id', async () => {
      jest
        .mocked(pokemonsLocalDataSource.toggleFavorite)
        .mockResolvedValueOnce(undefined as any);

      const result = await pokemonRepository.toggleFavorite('1');

      expect(pokemonsLocalDataSource.toggleFavorite).toHaveBeenCalledWith('1');
      expect(result).toBe('1');
    });
  });
});
