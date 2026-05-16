import {StyleSheet} from 'react-native';
import {AppTheme} from '@/src/theme/theme';

export const createStyles = (theme: AppTheme) => {
  const {spacing} = theme;

  return StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.xxl,
    },
  });
};
