import {View} from 'react-native';
import React, {use, useMemo} from 'react';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {Searchbar, TouchableRipple} from 'react-native-paper';
import {ICON_NAMES} from '@/src/constants/iconNames';
import {HeaderProps} from '@/src/components/Header/interfaces';
import {createStyles} from './Header.styles';
import {useTranslation} from 'react-i18next';
import {CustomIcon} from '@/src/components/CustomIcon/CustomIcon';

export const Header = ({
  searchQuery,
  handleOnChange,
  showFavorites,
  handleShowFavorites,
}: HeaderProps) => {
  const {t} = useTranslation();
  const {currentTheme, colors} = use(ThemeContext);
  const styles = useMemo(() => {
    return createStyles(currentTheme);
  }, [currentTheme]);

  return (
    <View style={styles.root}>
      <Searchbar
        placeholder={t('pokemonList.search')}
        onChangeText={handleOnChange}
        value={searchQuery}
        style={styles.searchBar}
      />
      <TouchableRipple
        borderless
        style={styles.favoriteButton}
        onPress={handleShowFavorites}
      >
        <CustomIcon
          name={ICON_NAMES.FAVORITE}
          color={showFavorites ? colors.danger : colors.borderStrong}
          fillColor={showFavorites ? colors.danger : 'transparent'}
        />
      </TouchableRipple>
    </View>
  );
};
