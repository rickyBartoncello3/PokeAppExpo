import {categoryLocalDataSource} from '@/src/Z_SRC/data/local/categories/categoryLocalDataSource';
import {categoryMapper} from '@/src/Z_SRC/data/mappers/categoryMapper';

export const categoryRepository = {
  async getCategories() {
    const rows = await categoryLocalDataSource.findAll();
    return rows.map(categoryMapper.localRowToDomain);
  },
};
