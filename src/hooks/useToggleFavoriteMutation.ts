import {useMutation, useQueryClient} from '@tanstack/react-query';
import {pokemonRepository} from '@/src/repositories/pokemonRepository';

export const useToggleFavoriteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => {
      return pokemonRepository.toggleFavorite(id);
    },

    onSuccess: async id => {
      await queryClient.invalidateQueries({
        queryKey: ['pokemons'],
      });

      await queryClient.invalidateQueries({
        queryKey: ['pokemon-detail', id],
      });

      await queryClient.invalidateQueries({
        queryKey: ['favorites'],
      });
    },
  });
};
