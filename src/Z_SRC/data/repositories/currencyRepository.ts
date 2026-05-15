import {currencyLocalDataSource} from '@/src/Z_SRC/data/local/currencies/currencyLocalDataSource';
import {currencyMapper} from '@/src/Z_SRC/data/mappers/currencyMapper';

export const currencyRepository = {
  async getCurrency() {
    const rows = await currencyLocalDataSource.findAll();
    return rows.map(currencyMapper.localRowToDomain);
  },
};
