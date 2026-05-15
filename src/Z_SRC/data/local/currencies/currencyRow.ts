import {CurrencyCode} from '@/src/Z_SRC/domain/currencies/Currency';

export type CurrencyRow = {
  code: CurrencyCode;
  name: string;
  symbol: string;
  minor_units: number;
  is_base: number;
  created_at: string;
  updated_at: string;
};
