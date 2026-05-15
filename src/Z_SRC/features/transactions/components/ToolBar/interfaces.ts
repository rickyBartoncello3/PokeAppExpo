import {Account} from '@/src/Z_SRC/domain/accounts/Account';
import {GroupMode} from '@/src/Z_SRC/features/transactions/screens/interfaces';

export interface ToolbarProps {
  accounts: Account[];
  selectedAccountId?: string;
  groupMode: GroupMode;
  areAllExpanded: boolean;
  onSelectAccount: (accountId: string) => void;
  onChangeGroupMode: (mode: GroupMode) => void;
  onToggleExpandAll: () => void;
}
