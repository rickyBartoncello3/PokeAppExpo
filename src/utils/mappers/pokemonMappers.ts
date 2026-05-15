import {
  PokemonDetail,
  PokemonDetailResponse,
  PokemonListItem,
  PokemonListItemDto,
} from '@/src/types/pokemon';
import {getPokemonColorByType} from '@/src/utils/getPokemonColorByType';
import {PokemonRow} from '@/src/storage/database/local/pokemons/pokemonsRow';

const getPokemonIdFromUrl = (url: string) => {
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
};

export const pokemonMappers = {
  listItemWithDetailToDomain: (
    item: PokemonListItemDto,
    detail: PokemonDetailResponse,
  ): PokemonListItem => {
    const id = getPokemonIdFromUrl(item.url);
    const types = detail.types.map(typeItem => typeItem.type.name);
    const primaryType = types[0];

    return {
      id,
      name: item.name,
      url: item.url,
      number: `#${String(id).padStart(3, '0')}`,
      imageUrl:
        detail.sprites.other?.['official-artwork']?.front_default ??
        detail.sprites.front_default ??
        '',
      types,
      color: getPokemonColorByType(primaryType),
      isFavorite: detail.isFavorite,
    };
  },

  detailToDomain: (pokemon: PokemonDetailResponse): PokemonDetail => {
    const id = String(pokemon.id);
    return {
      color: getPokemonColorByType(pokemon.types[0].type.name),
      isFavorite: pokemon.isFavorite,
      number: `#${id.padStart(3, '0')}`,
      id,
      name: pokemon.name,
      imageUrl:
        pokemon.sprites.other?.['official-artwork']?.front_default ??
        pokemon.sprites.front_default ??
        '',
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map(item => item.type.name),
      abilities: pokemon.abilities.map(item => item.ability.name),
      stats: pokemon.stats.map(item => ({
        name: item.stat.name,
        value: item.base_stat,
      })),
    };
  },

  rowToDomain: (row: PokemonRow): PokemonListItem => {
    return {
      id: row.id,
      name: row.name,
      url: row.url,
      number: row.number,
      imageUrl: row.image_url,
      types: JSON.parse(row.types),
      color: row.color,
      isFavorite: Boolean(row.is_favorite),
    };
  },

  domainToRow: (row: PokemonListItem): PokemonRow => {
    return {
      id: row.id,
      name: row.name,
      url: row.url,
      number: row.number,
      image_url: row.imageUrl,
      types: JSON.stringify(row.types ?? []),
      color: row.color,
      is_favorite: row.isFavorite ? 1 : 0,
    };
  },
};
