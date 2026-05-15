import React from 'react';
import {View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import {ICON_NAMES} from '@/src/constants/iconNames';
import {usePokemonDetailContext} from './PokemonDetail';
import {CustomIcon} from '@/src/components/CustomIcon/CustomIcon';
import {PokemonDetailHeaderProps} from '@/src/components/PokemonDetail/interfaces';

export const PokemonDetailHeader = ({
  onBack,
  onToggleFavorite,
}: PokemonDetailHeaderProps) => {
  const {pokemon, theme, styles} = usePokemonDetailContext();
  const {colors} = theme;

  return (
    <View style={styles.header}>
      <TouchableRipple borderless style={styles.favoriteButton} onPress={onBack}>
        <CustomIcon name={ICON_NAMES.ARROW_LEFT} color={colors.text} />
      </TouchableRipple>

      <TouchableRipple
        borderless
        style={styles.favoriteButton}
        onPress={onToggleFavorite}
      >
        <CustomIcon
          name={ICON_NAMES.FAVORITE}
          color={pokemon.isFavorite ? colors.danger : colors.borderStrong}
          fillColor={pokemon.isFavorite ? colors.danger : 'transparent'}
        />
      </TouchableRipple>
    </View>
  );
};
