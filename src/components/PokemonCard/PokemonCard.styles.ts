import {StyleSheet} from 'react-native';
import {AppTheme} from '@/src/theme/theme';
import {horizontalScale, verticalScale} from '@/src/theme/scaling';

export const createPokemonCardStyles = (theme: AppTheme) => {
  const {colors, spacing, radius, fontSize} = theme;

  return StyleSheet.create({
    card: {
      width: '48%',
      height: verticalScale(210),
      borderRadius: radius.xl,
      backgroundColor: colors.cardBackground,
      overflow: 'hidden',

      shadowColor: colors.shadow,
      shadowOpacity: 0.16,
      shadowRadius: 12,
      shadowOffset: {
        width: 0,
        height: 6,
      },
      elevation: 4,

      borderWidth: 1,
      borderColor: colors.border,
    },

    cardContent: {
      flex: 1,
    },

    imageSection: {
      height: verticalScale(110),
      borderTopLeftRadius: radius.xl,
      borderTopRightRadius: radius.xl,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image: {
      width: horizontalScale(100),
      height: verticalScale(100),
      borderRadius: radius.xl,
    },

    imagePlaceholder: {
      fontSize: fontSize.xxl,
      zIndex: 2,
      color: colors.textMuted,
    },

    actions: {
      position: 'absolute',
      top: spacing.sm,
      right: spacing.sm,
      zIndex: 5,
    },

    favorite: {
      color: colors.iconMuted,
    },

    favoriteActive: {
      color: colors.danger,
    },

    info: {
      flex: 1,
    },

    name: {
      color: colors.text,
    },

    number: {
      color: colors.textMuted,
    },

    typesRow: {
      flexDirection: 'row',
      gap: spacing.xs,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};
