import {db} from '@/src/storage/database/db';

export async function createPokemonsTable() {
  await db.exec(`
      CREATE TABLE IF NOT EXISTS pokemons (
                                              id TEXT PRIMARY KEY NOT NULL,
                                              name TEXT NOT NULL,
                                              url TEXT NOT NULL,
                                              number TEXT NOT NULL,
                                              image_url TEXT NOT NULL,
                                              types TEXT NOT NULL,
                                              color TEXT NOT NULL,
                                              is_favorite INT NULL
      );
  `);
}
