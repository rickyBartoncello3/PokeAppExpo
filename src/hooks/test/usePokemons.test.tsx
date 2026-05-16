import React, {PropsWithChildren} from 'react';
import {renderHook, waitFor} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {usePokemons} from '../usePokemons';
import {pokemonRepository} from '@/src/repositories/pokemonRepository';

jest.mock('@/src/repositories/pokemonRepository', () => ({
  pokemonRepository: {
    getPokemon: jest.fn(),
  },
}));

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({children}: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('usePokemons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('loads the first pokemon page', async () => {
    jest.mocked(pokemonRepository.getPokemon).mockResolvedValueOnce({
      nextOffset: 20,
      results: [
        {
          id: '1',
          name: 'Bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
          number: '#001',
          imageUrl: 'image.png',
          types: ['Grass', 'Poison'],
          color: '#A7F3D0',
          isFavorite: false,
        },
      ],
    });

    const {result} = renderHook(() => usePokemons(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.pages[0].results[0].name).toBe('Bulbasaur');
  });
});
