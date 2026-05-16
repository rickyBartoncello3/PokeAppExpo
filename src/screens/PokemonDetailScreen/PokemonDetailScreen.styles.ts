import {StyleSheet} from 'react-native';
import {AppTheme} from '@/src/theme/theme';

export const createPokemonDetailStyles = (theme: AppTheme) => {
  const {colors, spacing, radius} = theme;

  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: spacing.lg,
    },

    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.xxl,
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.lg,
    },

    headerButton: {
      width: 44,
      height: 44,
      borderRadius: radius.full,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.elevatedCardBackground,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: colors.shadow,
      shadowOpacity: 0.12,
      shadowRadius: 10,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      elevation: 3,
    },

    headerButtonText: {
      color: colors.text,
      marginTop: -2,
    },

    favoriteButton: {
      width: 48,
      height: 48,
      borderRadius: radius.full,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.elevatedCardBackground,
      borderWidth: 1,
      borderColor: colors.border,
      shadowColor: colors.shadow,
      shadowOpacity: 0.14,
      shadowRadius: 12,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      elevation: 4,
    },

    favoriteIcon: {
      color: colors.danger,
    },

    imageContainer: {
      height: 290,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.lg,
    },

    imageGlow: {
      position: 'absolute',
      width: 240,
      height: 240,
      borderRadius: radius.full,
      backgroundColor: colors.primarySoft,
    },

    image: {
      width: 260,
      height: 260,
    },

    content: {
      alignItems: 'center',
      paddingHorizontal: spacing.md,
    },

    title: {
      color: colors.text,
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

    typeBadge: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: radius.full,
    },

    metricsCard: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: colors.cardBackground,
      borderRadius: radius.xl,
      borderWidth: 1,
      borderColor: colors.border,
      padding: spacing.xxl,
    },

    metricItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.md,
      padding: spacing.xxl,
    },

    metricIcon: {
      color: colors.iconMuted,
    },

    metricLabel: {
      color: colors.textSecondary,
    },

    metricDivider: {
      width: 1,
      height: 46,
      backgroundColor: colors.divider,
      marginHorizontal: spacing.md,
    },
  });
};
