import React, {use} from 'react';
import {View} from 'react-native';

import Text from '@/src/components/Text/Text';
import {ThemeContext} from '@/src/providers/ThemeProvider';

import styles from './Box.styles';
import {CustomIcon} from '@/src/Z_SRC/shared/components/ui/TabBarIcon/CustomIcon';
import {ICON_NAMES} from '@/src/Z_SRC/shared/constants/iconNames';
import {BoxProps} from '@/src/Z_SRC/features/transaction/components/Box/interfaces';
import {Card} from '@/src/components/Card/Card';
import {TouchableRipple} from 'react-native-paper';

export const Box = ({title, subTitle, icon, onPress}: BoxProps) => {
  const {colors} = use(ThemeContext);
  return (
    <Card style={styles.root}>
      <TouchableRipple borderless onPress={onPress}>
        <View style={styles.container}>
          <View
            style={[
              styles.categoryEmptyIcon,
              icon &&
                icon.backgroundColor && {
                  borderWidth: 0,
                  backgroundColor: icon.backgroundColor,
                },
            ]}
          >
            {icon ? <CustomIcon name={icon.name} color={icon.color} size={18} /> : null}
          </View>
          <View style={styles.titleContainer}>
            <Text weight={700} size={12} style={styles.title}>
              {title}
            </Text>
            {typeof subTitle === 'string' ? (
              <Text weight={700} size={12}>
                {subTitle}
              </Text>
            ) : (
              subTitle
            )}
          </View>
          <CustomIcon name={ICON_NAMES.ARROW_RIGHT} size={20} color={colors.text} />
        </View>
      </TouchableRipple>
    </Card>
  );
};
