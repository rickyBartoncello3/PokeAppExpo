export type PokemonListItemDto = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItemDto[];
};

export type PokemonTypeDto = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonAbilityDto = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonStatDto = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonDetailResponse = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
    other?: {
      'official-artwork'?: {
        front_default: string | null;
      };
    };
  };
  types: PokemonTypeDto[];
  abilities: PokemonAbilityDto[];
  stats: PokemonStatDto[];
  isFavorite: boolean;
};

export type PokemonListItem = {
  id: string;
  name: string;
  url: string;
  number: string;
  imageUrl: string;
  isFavorite: boolean;
  types: string[];
  color: string;
};

export interface PokemonDetail extends Omit<PokemonListItem, 'url'> {
  height: number;
  weight: number;
  abilities: string[];
  stats: {
    name: string;
    value: number;
  }[];
}
