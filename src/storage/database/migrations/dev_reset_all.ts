import {db} from '@/src/storage/database/db';

export const devResetAllTables = async () => {
  await db.exec(`
    DROP TABLE IF EXISTS pokemons;
  `);

  console.info('[DB] accounts table reset successfully');

  console.info('[DB] transactions table reset successfully');
};
