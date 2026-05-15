import {Transaction} from '@/src/Z_SRC/domain/transactions/Transaction';
import {Category} from '@/src/Z_SRC/domain/categories/Category';
import {GroupMode} from '@/src/Z_SRC/features/transactions/screens/interfaces';

export interface TransactionMovementRowProps {
  transaction: Transaction;
  categories: Category[];
  symbol: string;
  groupMode: GroupMode;
}
