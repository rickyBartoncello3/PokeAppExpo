import React, {use, useMemo} from 'react';
import {View} from 'react-native';

import Text from '@/src/components/Text/Text';
import {ThemeContext} from '@/src/providers/ThemeProvider';

import {ErrorStateProps} from './interfaces';
import {createStyles} from './ErrorState.styles';
import {Button} from '@/src/components/Button/Button';
import {CustomView} from '@/src/components/CustomView/CustomView';

export const ErrorState = ({text, buttonText, onActionPress}: ErrorStateProps) => {
  const {currentTheme} = use(ThemeContext);
  const styles = useMemo(() => {
    return createStyles(currentTheme);
  }, [currentTheme]);

  return (
    <CustomView margin>
      <View style={styles.root}>
        <Text size={18} weight={900}>
          {text}
        </Text>
        <Button text={buttonText} onPress={onActionPress} />
      </View>
    </CustomView>
  );
};
