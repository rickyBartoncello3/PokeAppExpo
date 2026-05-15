import React, {createContext, use, useMemo} from 'react';

import {createPokemonCardStyles} from './PokemonCard.styles';
import {TouchableRipple} from 'react-native-paper';
import {View} from 'react-native';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {
  PokemonCardContextValue,
  PokemonCardProps,
} from '@/src/components/PokemonCard/interfaces';

const PokemonCardContext = createContext<PokemonCardContextValue | null>(null);

const Root = ({pokemon, onPress, children}: PokemonCardProps) => {
  const {currentTheme} = use(ThemeContext);
  const styles = useMemo(() => createPokemonCardStyles(currentTheme), [currentTheme]);

  return (
    <PokemonCardContext.Provider value={{pokemon, styles, theme: currentTheme}}>
      <TouchableRipple borderless onPress={() => onPress?.(pokemon)} style={styles.card}>
        <View style={[styles.cardContent, {backgroundColor: pokemon.color}]}>
          {children}
        </View>
      </TouchableRipple>
    </PokemonCardContext.Provider>
  );
};

export const usePokemonCard = () => {
  const context = use(PokemonCardContext);

  if (!context) {
    throw new Error('PokemonCard components must be used inside PokemonCard');
  }

  return context;
};

export const PokemonCard = {
  Root,
};
