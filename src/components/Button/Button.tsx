import {View} from 'react-native';
import {use} from 'react';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {globalStyles} from '@/src/theme/theme';
import {ActivityIndicator, Button as RNButton} from 'react-native-paper';
import Text from '@/src/components/Text/Text';
import {ButtonProps} from '@/src/components/Button/interfaces';

export const Button = ({text, styles, onPress, ...props}: ButtonProps) => {
  const {colors, currentTheme} = use(ThemeContext);

  return (
    <RNButton
      theme={currentTheme}
      onPress={onPress}
      style={[
        globalStyles.btnPrimary,
        {
          backgroundColor: props.disabled
            ? currentTheme.tabLabel.inactiveColor
            : currentTheme.tabLabel.activeColor,
        },
        styles,
      ]}
      {...props}
    >
      {props.loading ? (
        <View style={{borderWidth: 1, backgroundColor: 'red'}}>
          <ActivityIndicator theme={currentTheme} />
        </View>
      ) : (
        <Text
          size={globalStyles.btnPrimaryText.fontSize}
          weight={Number(globalStyles.btnPrimaryText.fontWeight)}
          style={[
            globalStyles.btnPrimaryText,
            {
              color: props.disabled ? colors.textMuted : colors.buttonTextColor,
            },
          ]}
        >
          {text}
        </Text>
      )}
    </RNButton>
  );
};
