import {PropsWithChildren} from 'react';
import {PokemonListItem} from '@/src/types/pokemon';
import {createPokemonCardStyles} from '@/src/components/PokemonCard/PokemonCard.styles';
import {AppTheme} from '@/src/theme/theme';

export type PokemonCardContextValue = {
  pokemon: PokemonListItem;
  styles: ReturnType<typeof createPokemonCardStyles>;
  theme: AppTheme;
};

export interface PokemonCardProps extends PropsWithChildren {
  pokemon: PokemonListItem;
  onPress?: (pokemon: PokemonListItem) => void;
}
