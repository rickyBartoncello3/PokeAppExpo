import {CategoryType} from '@/src/Z_SRC/domain/categories/CategoryType';
import {ICON_NAMES} from '@/src/Z_SRC/shared/constants/iconNames';

type ValueOf<T> = T[keyof T];

export type CategoryRow = {
  id: string;
  name: string;
  type: CategoryType;
  icon: ValueOf<typeof ICON_NAMES>;
  color: string;
  background_color: string;
  archived_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};
