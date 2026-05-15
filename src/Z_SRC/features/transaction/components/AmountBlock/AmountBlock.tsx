import React, {use, useMemo} from 'react';

import {ThemeContext} from '@/src/providers/ThemeProvider';
import Text from '@/src/components/Text/Text';
import styles from './AmountBlock.styles';
import {TouchableOpacity} from 'react-native';
import {AmountBlockProps} from '@/src/Z_SRC/features/transaction/components/AmountBlock/interfaces';
import {Card} from '@/src/components/Card/Card';

export const AmountBlock = ({amount, onPress}: AmountBlockProps) => {
  const {colors} = use(ThemeContext);

  const currentValue = useMemo(() => {
    const parts = amount.split(/[+\-×\/]/).filter(Boolean);

    return parts.at(-1) || '';
  }, [amount]);

  return (
    <Card>
      <TouchableOpacity onPress={onPress} style={styles.root}>
        <Text weight={700} size={12} style={styles.amountLabel}>
          Amount
        </Text>
        <Text size={44} weight={900} style={[styles.amount, {color: colors.primary}]}>
          {currentValue}
        </Text>
      </TouchableOpacity>
    </Card>
  );
};
