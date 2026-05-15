import React from 'react';
import {Image, View} from 'react-native';

import {usePokemonCard} from './PokemonCard';

export const PokemonCardImage = () => {
  const {pokemon, styles} = usePokemonCard();

  return (
    <View style={[styles.imageSection, {backgroundColor: pokemon.color}]}>
      <Image source={{uri: pokemon.imageUrl}} style={styles.image} resizeMode="contain" />
    </View>
  );
};
