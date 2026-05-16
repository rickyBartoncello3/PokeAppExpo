import React from 'react';
import {View} from 'react-native';
import {Image} from 'expo-image';
import {usePokemonCard} from './PokemonCard';
const fallbackPokemonImage = require('../..//assets/images/icon.png');

export const PokemonCardImage = () => {
  const {pokemon, styles} = usePokemonCard();

  return (
    <View style={[styles.imageSection, {backgroundColor: pokemon.color}]}>
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
