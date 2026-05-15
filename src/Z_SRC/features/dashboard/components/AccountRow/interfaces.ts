import {AccountSummary} from '@/src/Z_SRC/domain/dashboard/AccountSummary';
import {CurrencyCode} from '@/src/Z_SRC/features/dashboard/components/AccountsSummary/interfaces';

export interface AccountsItem extends AccountSummary {
  equivalentInMainCurrency?: number;
  mainCurrency: CurrencyCode;
}

export interface AccountRowProps {
  account: AccountsItem;
  onPress?: (account: AccountsItem) => void;
}
