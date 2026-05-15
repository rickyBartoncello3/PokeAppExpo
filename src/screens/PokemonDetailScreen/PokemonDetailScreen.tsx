import React from 'react';
import {View} from 'react-native';

import Text from '@/src/components/Text/Text';
import {CustomView} from '@/src/components/CustomView/CustomView';
import {PokemonDetailProps} from '@/src/screens/PokemonDetailScreen/interfaces';
import {usePokemonDetailViewModel} from '@/src/screens/PokemonDetailScreen/usePokemonDetailViewModel';
import PokemonDetail from '@/src/components/PokemonDetail';
import {Loading} from '@/src/components/Loading/Loading';

export const PokemonDetailScreen = ({route}: PokemonDetailProps) => {
  const vm = usePokemonDetailViewModel(route);

  if (vm.error || !vm.pokemon) {
    return (
      <CustomView margin>
        <View style={vm.styles.center}>
          <Text size={18} weight={900} style={vm.styles.title}>
            {vm.t('pokemonDetail.error')}
          </Text>
        </View>
      </CustomView>
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
