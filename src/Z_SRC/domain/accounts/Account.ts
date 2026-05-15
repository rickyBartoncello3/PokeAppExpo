import {CurrencyCode} from '@/src/Z_SRC/domain/currencies/Currency';
import {AccountType} from './AccountType';
import {IconName} from '@/src/Z_SRC/shared/constants/iconNames';

export type Account = {
  id: string;
  name: string;
  type: AccountType;
  icon: IconName;
  currencyCode: CurrencyCode;
  initialBalanceMinor: number;
  includeInTotal: boolean;
  archivedAt: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
