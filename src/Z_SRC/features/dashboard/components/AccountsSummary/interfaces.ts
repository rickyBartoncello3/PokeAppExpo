import {AccountType} from '@/src/Z_SRC/domain/accounts/AccountType';
import {AccountSummary} from '@/src/Z_SRC/domain/dashboard/AccountSummary';

export type CurrencyCode = 'ARS' | 'USD' | 'EUR';

export interface AccountItem {
  id: string;
  name: string;
  type: AccountType;
  currency: CurrencyCode;
  balance: number;
  equivalentInMainCurrency?: number;
  mainCurrency: CurrencyCode;
}

export interface AccountsSummaryProps {
  accounts: AccountSummary[];
  mainCurrency?: CurrencyCode;
  title?: string;
  onPressSeeAll?: () => void;
  onPressAccount?: (account: AccountSummary) => void;
}
