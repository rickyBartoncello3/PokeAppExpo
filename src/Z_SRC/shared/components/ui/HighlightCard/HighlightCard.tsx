import React, {use} from 'react';
import {HighlightCardProps} from '@/src/Z_SRC/shared/components/ui/Highlight/interfaces';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {Card} from '@/src/components/Card/Card';
import {HighlightHeader} from '@/src/Z_SRC/shared/components/ui/HighlightHeader/HighlightHeader';
import {getPercentageLabel} from '@/src/Z_SRC/shared/utils/getPercentageLabel';
import Text from '@/src/components/Text/Text';
import styles from './HighlightCard.styles';
import {View} from 'react-native';

export const HighlightCard = ({item}: HighlightCardProps) => {
  const {colors} = use(ThemeContext);

  const isPositiveForSpending = item.value < 0;

  const percentageColor = isPositiveForSpending
    ? colors.positive
    : item.value > 0
      ? colors.negative
      : colors.textSecondary;

  return (
    <Card>
      <HighlightHeader item={item} />
      <View style={styles.percentageContainer}>
        <Text size={20} weight={800} style={{color: percentageColor}}>
          {getPercentageLabel(item.value)}
        </Text>
      </View>
    </Card>
  );
};
