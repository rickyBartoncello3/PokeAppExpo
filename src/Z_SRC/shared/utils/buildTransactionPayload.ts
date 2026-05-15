import {normalizeAmount} from '@/src/Z_SRC/shared/utils/normalizeAmount';
import {TransactionMode} from '@/src/Z_SRC/features/transaction/screens/interfaces';
import {CurrencyCode} from '@/src/Z_SRC/domain/currencies/Currency';

type BuildTransactionPayloadParams = {
  amount: string;
  currencyCode: CurrencyCode;
  accountId: string;
  categoryId?: string;
  occurredAt: string;
  note?: string;
  type: TransactionMode;
};

export const buildTransactionPayload = ({
  amount,
  currencyCode,
  accountId,
  categoryId,
  occurredAt,
  note,
  type,
}: BuildTransactionPayloadParams) => ({
  amount: normalizeAmount(amount),
  currency: currencyCode,
  accountId,
  categoryId,
  occurredAt,
  note,
  type,
  mainCurrency: currencyCode,
  exchangeRateToMainCurrency: 0,
});
