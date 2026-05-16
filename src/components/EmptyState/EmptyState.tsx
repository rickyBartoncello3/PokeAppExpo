import React, {use, useMemo} from 'react';
import {View} from 'react-native';
import Text from '@/src/components/Text/Text';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {CustomIcon} from '@/src/components/CustomIcon/CustomIcon';
import {ICON_NAMES} from '@/src/constants/iconNames';
import {EmptyStateProps} from './interfaces';
import {createStyles} from './EmptyState.styles';

export const EmptyState = ({title, description, icon}: EmptyStateProps) => {
  const {currentTheme, colors} = use(ThemeContext);
  const styles = useMemo(() => {
    return createStyles(currentTheme);
  }, [currentTheme]);

  return (
    <View style={styles.root}>
      <View style={styles.iconContainer}>
        {icon ?? (
          <CustomIcon name={ICON_NAMES.POKEBALL} size={48} color={colors.primary} />
        )}
      </View>
      <Text size={22} weight={900} style={styles.title}>
        {title}
      </Text>
      <Text size={14} weight={600} style={styles.description}>
        {description}
      </Text>
    </View>
  );
};
