import {accountMapper} from '@/src/Z_SRC/data/mappers/accountMapper';
import {accountLocalDataSource} from '@/src/Z_SRC/data/local/accounts/accountLocalDataSource';

export const accountRepository = {
  async getAccounts() {
    const rows = await accountLocalDataSource.findAll();
    return rows.map(accountMapper.localRowToDomain);
  },
};
