import React from 'react';
import {View} from 'react-native';
import {Image} from 'expo-image';
import {usePokemonDetailContext} from './PokemonDetail';
const fallbackPokemonImage = require('../..//assets/images/icon.png');

export const PokemonDetailHeroImage = () => {
  const {pokemon, styles} = usePokemonDetailContext();

  return (
    <View style={styles.imageContainer}>
      <View style={[styles.imageGlow, {backgroundColor: pokemon.color}]} />
      <Image
        source={pokemon.imageUrl ? pokemon.imageUrl : fallbackPokemonImage}
        style={styles.image}
        contentFit="contain"
        transition={180}
        cachePolicy="disk"
        placeholder={fallbackPokemonImage}
      />
    </View>
  );
};
