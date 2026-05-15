import {StyleSheet} from 'react-native';
import {AppTheme} from '@/src/theme/theme';
export const createStyles = (theme: AppTheme) => {
  const {spacing, radius, colors} = theme;
  return StyleSheet.create({
    root: {
      flex: 1,
      gap: spacing.lg,
      paddingTop: spacing.lg,
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
    listContent: {
      gap: 16,
    },
    columnWrapper: {
      justifyContent: 'space-around',
    },
    emptyState: {
      paddingTop: 80,
      alignItems: 'center',
    },
  });
};
