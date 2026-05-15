import {PokemonRow} from './pokemonsRow';
import {db} from '@/src/storage/database/db';

export const pokemonsLocalDataSource = {
  async findAll(): Promise<PokemonRow[]> {
    return db.getAll<PokemonRow>(`
      SELECT *
      FROM pokemons;
    `);
  },

  async findById(id: string): Promise<PokemonRow | null> {
    return db.getFirst<PokemonRow>(`
      SELECT *
      FROM pokemons WHERE id=${id};
    `);
  },

  async upsert(rows: PokemonRow[]) {
    await Promise.all(
      rows.map(async row => {
        await db.run(
          `
                        INSERT OR IGNORE INTO pokemons (
          id,
          name,
          url,
          number,
          image_url,
          types,
          color,
          is_favorite
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
                    `,
          [
            row.id,
            row.name,
            row.url,
            row.number,
            row.image_url,
            row.types,
            row.color,
            row.is_favorite ? 1 : 0,
          ],
        );
      }),
    );
  },

  async findFavoriteIds(): Promise<string[]> {
    const rows = await db.getAll<{id: string}>(`
    SELECT id
    FROM pokemons
    WHERE is_favorite = 1;
  `);

    return rows.map(row => row.id);
  },

  async toggleFavorite(id: string) {
    await db.run(
      `
      UPDATE pokemons
      SET is_favorite =
        CASE
          WHEN is_favorite = 1 THEN 0
          ELSE 1
        END
      WHERE id = ?;
      `,
      [id],
    );
  },
};
