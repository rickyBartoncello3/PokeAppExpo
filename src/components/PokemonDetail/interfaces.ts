import {PokemonDetail as PokemonDetailType} from '@/src/types/pokemon';
import {AppTheme} from '@/src/theme/theme';
import {createStyles} from '@/src/components/PokemonDetail/PokemonDetail.styles';
import {PropsWithChildren} from 'react';
type PokemonDetailStyles = ReturnType<typeof createStyles>;

export interface PokemonDetailContextValue {
  pokemon: PokemonDetailType;
  theme: AppTheme;
  styles: PokemonDetailStyles;
}

export interface PokemonDetailHeaderProps {
  onBack: () => void;
  onToggleFavorite: () => void;
}

export interface PokemonDetailRootProps extends PropsWithChildren {
  pokemon: PokemonDetailType;
}
