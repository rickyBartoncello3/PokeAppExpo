import React, {createContext, use, useMemo} from 'react';
import {View} from 'react-native';

import {ThemeContext} from '@/src/providers/ThemeProvider';
import {createStyles} from './PokemonDetail.styles';
import {
  PokemonDetailContextValue,
  PokemonDetailRootProps,
} from '@/src/components/PokemonDetail/interfaces';

const PokemonDetailContext = createContext<PokemonDetailContextValue | null>(null);

const Root = ({pokemon, children}: PokemonDetailRootProps) => {
  const {currentTheme} = use(ThemeContext);
  const styles = useMemo(() => {
    return createStyles(currentTheme);
  }, [currentTheme]);

  return (
    <PokemonDetailContext.Provider value={{pokemon, theme: currentTheme, styles}}>
      <View style={styles.root}>{children}</View>
    </PokemonDetailContext.Provider>
  );
};

export const usePokemonDetailContext = () => {
  const context = use(PokemonDetailContext);

  if (!context) {
    throw new Error('PokemonDetail components must be used inside PokemonDetail.Root');
  }

  return context;
};

export const PokemonDetail = {
  Root,
};
