import {Account} from '@/src/Z_SRC/domain/accounts/Account';

export interface AccountSelectorProps {
  accounts: Account[];
  selectedAccountId: string | null;
  onSelectAccount: (accountId: string) => void;
}
