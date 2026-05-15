import {TransactionMode} from '@/src/Z_SRC/features/transaction/screens/interfaces';

type Value = {
  value: TransactionMode;
  label: string;
};

export interface SegmentedButtonsProps {
  initialValue: TransactionMode;
  handleOnChange: (newValue: TransactionMode) => void;
  values: Value[];
}
