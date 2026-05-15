import {RouteProp, useNavigation} from '@react-navigation/native';
import {use, useMemo} from 'react';
import {useTranslation} from 'react-i18next';

import {RootStackParamList} from '@/src/navigation/routes';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {usePokemonDetail} from '@/src/hooks/usePokemonDetail';
import {useToggleFavoriteMutation} from '@/src/hooks/useToggleFavoriteMutation';
import {createPokemonDetailStyles} from '@/src/screens/PokemonDetailScreen/PokemonDetailScreen.styles';

type PokemonDetailRoute = RouteProp<RootStackParamList, 'PokemonDetail'>;

export const usePokemonDetailViewModel = (route: PokemonDetailRoute) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const {currentTheme} = use(ThemeContext);
  const {pokemonId} = route.params;

  const styles = useMemo(() => createPokemonDetailStyles(currentTheme), [currentTheme]);

  const {data: pokemon, isLoading: isPokemonLoading, error} = usePokemonDetail(pokemonId);

  const {mutate: toggleFavorite, isPending: isToggleFavoritePending} =
    useToggleFavoriteMutation();

  const handleToggleFavorite = () => {
    if (!pokemon?.id) {
      return;
    }

    toggleFavorite(pokemon.id);
  };

  return {
    styles,
    pokemon,
    error,
    t,
    isLoading: isPokemonLoading || isToggleFavoritePending,
    handleToggleFavorite,
    handleGoBack: navigation.goBack,
  };
};
