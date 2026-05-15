import {StyleSheet} from 'react-native';
import {AppTheme} from '@/src/theme/theme';

export const createStyles = (theme: AppTheme) => {
  const {colors, spacing, radius} = theme;

  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: colors.background,
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.lg,
    },

    favoriteButton: {
      width: 44,
      height: 44,
      borderRadius: radius.full,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.elevatedCardBackground,
      borderWidth: 1,
      borderColor: colors.border,
    },

    imageContainer: {
      height: 290,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.lg,
    },

    imageGlow: {
      position: 'absolute',
      width: 230,
      height: 230,
      borderRadius: radius.full,
      opacity: 0.22,
    },

    image: {
      width: 260,
      height: 260,
    },

    infoContent: {
      alignItems: 'center',
      paddingHorizontal: spacing.md,
    },

    name: {
      color: colors.text,
      textAlign: 'center',
      marginBottom: spacing.xs,
    },

    number: {
      color: colors.textMuted,
      textAlign: 'center',
      marginBottom: spacing.md,
    },

    typesRow: {
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: spacing.sm,
      marginBottom: spacing.xl,
    },

    metricsCard: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.cardBackground,
      borderRadius: radius.xl,
      borderWidth: 1,
      borderColor: colors.border,
      paddingVertical: spacing.lg,
      paddingHorizontal: spacing.lg,
      shadowColor: colors.shadow,
      shadowOpacity: 0.1,
      shadowRadius: 12,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      elevation: 3,
    },

    metricItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.md,
    },

    metricLabel: {
      color: colors.textSecondary,
      marginBottom: 2,
    },

    metricDivider: {
      width: 1,
      height: 46,
      backgroundColor: colors.divider,
      marginHorizontal: spacing.md,
    },
  });
};
