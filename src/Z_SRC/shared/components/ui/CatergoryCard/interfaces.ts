import {Category} from '@/src/Z_SRC/domain/categories/Category';

export interface CategoryCardProps {
  category: Category;
  onCategoryPress: (category: Category) => void;
}
