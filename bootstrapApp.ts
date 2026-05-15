import {runMigrations} from '@/src/storage/database/migrations';

export const bootstrapApp = async () => {
  await runMigrations();
  //await devResetAllTables();
  console.info('[BOOTSTRAP] migrations done');
};
