import React from 'react';
import {Image, View} from 'react-native';

import {usePokemonDetailContext} from './PokemonDetail';

export const PokemonDetailHeroImage = () => {
  const {pokemon, styles} = usePokemonDetailContext();

  return (
    <View style={styles.imageContainer}>
      <View style={[styles.imageGlow, {backgroundColor: pokemon.color}]} />
      <Image source={{uri: pokemon.imageUrl}} style={styles.image} resizeMode="contain" />
    </View>
  );
};
