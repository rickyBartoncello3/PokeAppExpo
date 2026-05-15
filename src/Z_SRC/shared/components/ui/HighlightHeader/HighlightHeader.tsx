import React, {use} from 'react';
import {View} from 'react-native';
import styles from './HighlightHeader.styles';
import {HighlightHeaderProps} from '@/src/Z_SRC/shared/components/ui/HighlightHeader/interfaces';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import Text from '@/src/components/Text/Text';
import {IconWithContainer} from '@/src/Z_SRC/shared/components/ui/IconWithContainer/IconWithContainer';

export const HighlightHeader = ({item}: HighlightHeaderProps) => {
  const {colors} = use(ThemeContext);
  return (
    <View style={styles.header}>
      <IconWithContainer icon={item.icon} />
      <View>
        <Text size={10} weight={700} numberOfLines={1} style={{color: colors.text}}>
          {item.title}
        </Text>
        <Text size={8} weight={500} style={{color: colors.textSecondary}}>
          {item.subtitle}
        </Text>
      </View>
    </View>
  );
};
