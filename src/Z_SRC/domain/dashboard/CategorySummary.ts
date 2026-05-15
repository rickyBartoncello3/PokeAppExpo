import {TransactionType} from '@/src/Z_SRC/domain/transactions/TransactionType';

export type CategorySummary = {
  categoryId: string;
  name: string;
  color: string;
  total: number;
  percentage: number;
  type: TransactionType;
};
