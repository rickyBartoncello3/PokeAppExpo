import React, {use, useMemo} from 'react';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {TypeChipProps} from '@/src/components/TypeChip/interfaces';
import {getTypeColor} from '@/src/utils/getTypeColor';
import {createPokemonCardStyles} from '@/src/components/TypeChip/TypeChip.styles';
import {Chip} from 'react-native-paper';
import {capitalize} from '@/src/utils/capitalize';

export const TypeChip = ({type}: TypeChipProps) => {
  const {currentTheme} = use(ThemeContext);
  const styles = useMemo(() => createPokemonCardStyles(currentTheme), [currentTheme]);

  const typeColor = getTypeColor(type, currentTheme.colors);

  return (
    <Chip
      style={[styles.typeBadge, {backgroundColor: typeColor.background}]}
      textStyle={[styles.typeText, {color: typeColor.text}]}
    >
      {capitalize(type)}
    </Chip>
  );
};
