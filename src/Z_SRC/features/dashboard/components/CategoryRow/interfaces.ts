import {CategorySummary} from '@/src/Z_SRC/domain/dashboard/CategorySummary';

export interface CategoryRowProps {
  category: CategorySummary;
  currencySymbol?: string;
  onPress?: (category: CategorySummary) => void;
}
