import {httpClient} from '@/src/Z_SRC/core/api/httpClient';
import {ExchangeRateDto} from './exchangeRateDto';

export const exchangeRateRemoteDataSource = {
  getUsdToArs() {
    return httpClient.get<ExchangeRateDto>('v1/dolares/oficial');
  },
};
