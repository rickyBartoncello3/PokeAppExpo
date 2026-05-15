import {CurrencyCode} from '@/src/Z_SRC/domain/currencies/Currency';
import {AccountType} from '@/src/Z_SRC/domain/accounts/AccountType';
import {IconName} from '@/src/Z_SRC/shared/constants/iconNames';

export type AccountSummary = {
  id: string;
  name: string;
  icon: IconName;
  type: AccountType;
  currency: CurrencyCode;
  symbol: string;
  balance: number;
  income: number;
  expense: number;
};
