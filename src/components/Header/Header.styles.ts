import {StyleSheet} from 'react-native';
import {AppTheme} from '@/src/theme/theme';

export const createStyles = (theme: AppTheme) => {
  const {radius, colors} = theme;
  return StyleSheet.create({
    root: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      gap: 16,
      alignItems: 'center',
    },
    searchBar: {width: '70%'},
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
  });
};
