export const Routes = {
    PokemonList: 'PokemonList',
    PokemonDetail: 'PokemonDetail',
    Favorites: 'Favorites',
} as const;

export type RootStackParamList = {
    [Routes.PokemonList]: undefined;
    [Routes.PokemonDetail]: {
        pokemonName: string;
        pokemonUrl?: string;
    };
    [Routes.Favorites]: undefined;
};
