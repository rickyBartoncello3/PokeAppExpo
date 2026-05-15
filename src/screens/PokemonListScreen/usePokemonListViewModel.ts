import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/core';
import {use, useMemo, useState} from 'react';

import {RootStackParamList, Routes} from '@/src/navigation/routes';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {usePokemons} from '@/src/hooks/usePokemons';
import {PokemonListItem} from '@/src/types/pokemon';
import {createStyles} from '@/src/screens/PokemonListScreen/PokemonListScreen.styles';
import {useTranslation} from 'react-i18next';

export const MIN_SEARCH_LENGTH = 3;

export const usePokemonListViewModel = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {t} = useTranslation();
  const {currentTheme, colors} = use(ThemeContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);

  const styles = useMemo(() => createStyles(currentTheme), [currentTheme]);

  const {data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage} =
    usePokemons();

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const hasSearchQuery = normalizedSearchQuery.length >= MIN_SEARCH_LENGTH;

  const pokemons = useMemo(() => {
    const pokemonList = data?.pages.flatMap(page => page.results) ?? [];

    return pokemonList
      .filter(pokemon => !showFavorites || pokemon.isFavorite)
      .filter(
        pokemon =>
          !hasSearchQuery || pokemon.name.toLowerCase().includes(normalizedSearchQuery),
      );
  }, [data, showFavorites, hasSearchQuery, normalizedSearchQuery]);

  const fetchNewPokemons = async () => {
    const canFetchMorePokemons =
      !hasSearchQuery && !showFavorites && hasNextPage && !isFetchingNextPage;
    if (!canFetchMorePokemons) {
      return;
    }

    await fetchNextPage();
  };

  const handleShowPokemonDetails = (pokemon: PokemonListItem) => {
    navigation.navigate(Routes.PokemonDetail, {
      pokemonId: pokemon.id,
    });
  };

  const handleToggleFavorites = () => {
    setShowFavorites(previousShowFavorites => !previousShowFavorites);
  };

  return {
    t,
    error,
    styles,
    colors,
    pokemons,
    isLoading,
    searchQuery,
    showFavorites,
    isFetchingNextPage,
    setSearchQuery,
    fetchNewPokemons,
    handleShowPokemonDetails,
    handleShowFavoritesPokemon: handleToggleFavorites,
  };
};
