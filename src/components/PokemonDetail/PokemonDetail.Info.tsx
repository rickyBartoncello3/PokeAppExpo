import React from 'react';
import {View} from 'react-native';

import Text from '@/src/components/Text/Text';
import {TypeChip} from '@/src/components/TypeChip/TypeChip';
import {capitalize} from '@/src/utils/capitalize';
import {usePokemonDetailContext} from './PokemonDetail';

export const PokemonDetailInfo = () => {
  const {pokemon, styles} = usePokemonDetailContext();

  return (
    <View style={styles.infoContent}>
      <Text size={30} weight={900} style={styles.name}>
        {capitalize(pokemon.name)}
      </Text>
      <Text size={16} weight={800} style={styles.number}>
        {pokemon.number ?? `#${String(pokemon.id).padStart(3, '0')}`}
      </Text>
      <View style={styles.typesRow}>
        {pokemon.types.map((type, index) => (
          <TypeChip key={`${type}-${index}`} type={type} />
        ))}
      </View>
    </View>
  );
};
