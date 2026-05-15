import {Category} from '@/src/Z_SRC/domain/categories/Category';

export interface CategoriesContentProps {
  title: string;
  categories: Category[];
  onCategoryPress: (category: Category) => void;
}
