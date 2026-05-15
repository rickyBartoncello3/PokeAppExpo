import {useQuery} from '@tanstack/react-query';
import {categoryRepository} from '@/src/Z_SRC/data/repositories/categoryRepository';

export function useCategoriesQuery() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: categoryRepository.getCategories,
    staleTime: Infinity,
  });
}
