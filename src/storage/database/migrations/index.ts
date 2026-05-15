import {createPokemonsTable} from '@/src/storage/database/migrations/create_pokemons';

export async function runMigrations() {
  await Promise.all([await createPokemonsTable()]);
}
