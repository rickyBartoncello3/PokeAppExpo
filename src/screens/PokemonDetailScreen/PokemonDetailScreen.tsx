import {CustomView} from '@/src/components/CustomView/CustomView';
import {PokemonDetailProps} from '@/src/screens/PokemonDetailScreen/interfaces';
import {usePokemonDetailViewModel} from '@/src/screens/PokemonDetailScreen/usePokemonDetailViewModel';
import PokemonDetail from '@/src/components/PokemonDetail';
import {Loading} from '@/src/components/Loading/Loading';
import {ErrorState} from '@/src/components/ErrorState/ErrorState';

export const PokemonDetailScreen = ({route}: PokemonDetailProps) => {
  const vm = usePokemonDetailViewModel(route);

  if (vm.isLoading && !vm.pokemon) {
    return <Loading isLoading={vm.isLoading} full />;
  }

  if (vm.error || !vm.pokemon) {
    return (
      <ErrorState
        text={vm.t('pokemonDetail.error')}
        buttonText={vm.t('pokemonDetail.goToHome')}
        onActionPress={vm.handleRetry}
      />
    );
  }

  return (
    <CustomView margin>
      <Loading isLoading={vm.isLoading} />
      <PokemonDetail.Root pokemon={vm.pokemon}>
        <PokemonDetail.Header
          onBack={vm.handleGoBack}
          onToggleFavorite={vm.handleToggleFavorite}
        />
        <PokemonDetail.HeroImage />
        <PokemonDetail.Info />
        <PokemonDetail.Metrics />
      </PokemonDetail.Root>
    </CustomView>
  );
};
