import {useQuery} from '@tanstack/react-query';
import {currencyRepository} from '@/src/Z_SRC/data/repositories/currencyRepository';

export function useCurrenciesQuery() {
  return useQuery({
    queryKey: ['currencies'],
    queryFn: currencyRepository.getCurrency,
    staleTime: Infinity,
  });
}
