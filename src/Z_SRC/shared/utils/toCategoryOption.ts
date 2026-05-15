import {Category} from '@/src/Z_SRC/domain/categories/Category';
import {CategoryOption} from '@/src/Z_SRC/features/transaction/screens/interfaces';

export const toCategoryOption = (category: Category): CategoryOption => ({
  id: category.id,
  name: category.name,
  color: category.color,
  icon: category.icon,
  backgroundColor: category.backgroundColor,
});
