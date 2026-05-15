import {CurrencyCode} from '@/src/Z_SRC/domain/currencies/Currency';
import {AccountType} from '@/src/Z_SRC/domain/accounts/AccountType';
import {TransactionType} from '@/src/Z_SRC/domain/transactions/TransactionType';
import {IconName} from '@/src/Z_SRC/shared/constants/iconNames';

export type AccountSummaryRow = {
  id: string;
  name: string;
  type: AccountType;
  icon: IconName;
  currency_code: CurrencyCode;
  symbol: string;
  initial_balance_minor: number;
  income_total: number | null;
  expense_total: number | null;
};

export type CategoryExpenseSummaryRow = {
  category_id: string;
  category_name: string;
  category_color: string;
  category_icon: string;
  total: number;
  type: TransactionType;
};

export type SpendingTotalRow = {
  total: number | null;
};
