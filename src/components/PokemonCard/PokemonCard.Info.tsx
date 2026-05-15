import React from 'react';

import {usePokemonCard} from './PokemonCard';
import Text from '@/src/components/Text/Text';
import {Card} from '@/src/components/Card/Card';
import {View} from 'react-native';
import {TypeChip} from '@/src/components/TypeChip/TypeChip';
import {capitalize} from '@/src/utils/capitalize';

export const PokemonCardInfo = () => {
  const {pokemon, styles} = usePokemonCard();

  return (
    <Card style={styles.info}>
      <Text size={16} weight={900} style={styles.name}>
        {capitalize(pokemon.name)}
      </Text>
      <Text size={12} weight={800} style={styles.number}>
        {pokemon.number}
      </Text>
      <View style={styles.typesRow}>
        {pokemon.types.map((type, i) => (
          <TypeChip key={i} type={type} />
        ))}
      </View>
    </Card>
  );
};
