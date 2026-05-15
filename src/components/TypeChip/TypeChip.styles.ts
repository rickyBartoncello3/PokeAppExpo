import {StyleSheet} from 'react-native';
import {AppTheme} from '@/src/theme/theme';

export const createPokemonCardStyles = (theme: AppTheme) => {
  const {radius, fontSize} = theme;

  return StyleSheet.create({
    typeBadge: {
      borderRadius: radius.xl,
    },

    typeText: {
      fontSize: fontSize.xs,
      fontWeight: '800',
    },
  });
};
