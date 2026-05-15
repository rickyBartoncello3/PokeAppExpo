import {StyleSheet} from 'react-native';
import {AppTheme} from '@/src/theme/theme';

export const createStyles = (theme: AppTheme) => {
  const {colors, spacing, radius} = theme;

  return StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.xxl,
    },

    iconContainer: {
      width: 96,
      height: 96,
      borderRadius: radius.full,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primarySoft,
      marginBottom: spacing.xl,
    },

    title: {
      color: colors.text,
      textAlign: 'center',
      marginBottom: spacing.sm,
    },

    description: {
      color: colors.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
      marginBottom: spacing.xl,
    },

    actionButton: {
      minHeight: 44,
      paddingHorizontal: spacing.xl,
      borderRadius: radius.full,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
    },

    actionText: {
      color: colors.buttonTextColor,
    },
  });
};
