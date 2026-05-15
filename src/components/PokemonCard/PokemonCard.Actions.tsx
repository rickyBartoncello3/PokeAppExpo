import React from 'react';
import {View} from 'react-native';

import {usePokemonCard} from './PokemonCard';
import {CustomIcon} from '@/src/components/CustomIcon/CustomIcon';
import {ICON_NAMES} from '@/src/constants/iconNames';

type PokemonCardActionsProps = {
  isFavorite?: boolean;
};

export const PokemonCardActions = ({isFavorite = false}: PokemonCardActionsProps) => {
  const {theme, styles} = usePokemonCard();

  return (
    <View style={styles.actions}>
      <CustomIcon
        name={ICON_NAMES.FAVORITE}
        size={22}
        color={isFavorite ? theme.colors.danger : theme.colors.borderStrong}
        fillColor={isFavorite ? theme.colors.danger : 'transparent'}
      />
    </View>
  );
};
