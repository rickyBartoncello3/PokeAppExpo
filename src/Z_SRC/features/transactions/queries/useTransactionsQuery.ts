import {useQuery} from '@tanstack/react-query';
import {transactionRepository} from '@/src/Z_SRC/data/repositories/transactionRepository';
import {TransactionFilters} from '@/src/Z_SRC/domain/transactions/TransactionFilters';

export const useTransactionsQuery = (filters?: TransactionFilters) => {
  return useQuery({
    queryKey: ['transactions', filters],
    queryFn: () => transactionRepository.getTransactionsByFilters(filters),
    staleTime: 1000 * 30,
  });
};
