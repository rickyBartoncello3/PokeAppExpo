import {TransactionType} from '@/src/Z_SRC/domain/transactions/TransactionType';
import {IconName} from '@/src/Z_SRC/shared/constants/iconNames';

export type TransactionMode = TransactionType;

export type CategoryOption = {
  id: string;
  name: string;
  icon: IconName;
  color: string;
  backgroundColor: string;
};

export type SmartAmountButton = {
  label: string;
  value: string;
};

export type RouteParams = {
  transactionId?: string;
};
