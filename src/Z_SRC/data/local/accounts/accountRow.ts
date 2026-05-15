import {AccountType} from '@/src/Z_SRC/domain/accounts/AccountType';
import {CurrencyCode} from '@/src/Z_SRC/domain/currencies/Currency';

export type AccountRow = {
  id: string;
  name: string;
  type: AccountType;
  icon: string;
  currency_code: CurrencyCode;
  initial_balance_minor: number;
  include_in_total: number;
  archived_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};
