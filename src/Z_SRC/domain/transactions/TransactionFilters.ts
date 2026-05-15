import {CurrencyCode} from '@/src/Z_SRC/domain/currencies/Currency';
import {TransactionType} from '@/src/Z_SRC/domain/transactions/TransactionType';

export type TransactionFilters = {
  date?: string;
  type?: TransactionType;
  accountId?: string;
  categoryId?: string;
  currency?: CurrencyCode;
};
