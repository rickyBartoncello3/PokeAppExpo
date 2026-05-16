import {FlatList, View} from 'react-native';
import {CustomView} from '@/src/components/CustomView/CustomView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonListItem} from '@/src/types/pokemon';
import PokemonCard from '@/src/components/PokemonCard';
import {
  MIN_SEARCH_LENGTH,
  usePokemonListViewModel,
} from '@/src/screens/PokemonListScreen/usePokemonListViewModel';
import {Loading} from '@/src/components/Loading/Loading';
import {Header} from '@/src/components/Header/Header';
import {EmptyState} from '@/src/components/EmptyState/EmptyState';

export const PokemonListScreen = () => {
  const {top} = useSafeAreaInsets();
  const vm = usePokemonListViewModel();

  if (vm.isLoading && vm.pokemons.length === 0) {
    return <Loading isLoading={vm.isLoading} full />;
  }

  const renderItem = ({item}: {item: PokemonListItem}) => {
    return (
      <PokemonCard.Root pokemon={item} onPress={vm.handleShowPokemonDetails}>
        <PokemonCard.Actions isFavorite={item.isFavorite} />
        <PokemonCard.Image />
        <PokemonCard.Info />
      </PokemonCard.Root>
    );
  };

  const renderEmpty = () => {
    return (
      <EmptyState
        title={
          vm.showFavorites
            ? vm.t('pokemonList.noFavorites.title')
            : vm.searchQuery.length >= MIN_SEARCH_LENGTH
              ? vm.t('pokemonList.noSearchResults.title')
              : vm.t('pokemonList.empty.title')
        }
        description={
          vm.showFavorites
            ? vm.t('pokemonList.noFavorites.description')
            : vm.searchQuery.length >= MIN_SEARCH_LENGTH
              ? vm.t('pokemonList.noSearchResults.description')
              : vm.t('pokemonList.empty.description')
        }
      />
    );
  };

  return (
    <CustomView isScrolling={false} margin>
      <Loading isLoading={vm.isLoading} />
      <View style={[vm.styles.root, {marginTop: top}]}>
        <Header
          searchQuery={vm.searchQuery}
          handleOnChange={vm.setSearchQuery}
          showFavorites={vm.showFavorites}
          handleShowFavorites={vm.handleShowFavoritesPokemon}
        />
        <FlatList
          data={vm.pokemons}
          numColumns={2}
          keyExtractor={item => item.id}
          columnWrapperStyle={vm.styles.columnWrapper}
          contentContainerStyle={vm.styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          onEndReachedThreshold={0.6}
          ListFooterComponent={<Loading isLoading={vm.isFetchingNextPage} />}
          onEndReached={vm.fetchNewPokemons}
          ListEmptyComponent={renderEmpty}
        />
      </View>
    </CustomView>
  );
};
