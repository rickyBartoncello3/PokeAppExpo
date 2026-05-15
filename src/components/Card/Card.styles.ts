import {StyleSheet} from 'react-native';
import {AppTheme} from '@/src/theme/theme';

export const createStyles = (theme: AppTheme) => {
  const {colors, radius, spacing} = theme;
  return StyleSheet.create({
    card: {
      backgroundColor: colors.insightCardBackground,
      borderColor: colors.border,
      borderRadius: radius.xl,
      borderWidth: 1,
      padding: 0,
    },
    content: {
      padding: spacing.xxl,
    },
  });
};
