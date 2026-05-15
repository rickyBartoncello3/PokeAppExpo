import {View} from 'react-native';
import {use} from 'react';
import {ThemeContext} from '@/src/providers/ThemeProvider';
import {globalStyles} from '@/src/theme/theme';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomViewProps} from '@/src/components/CustomView/interfaces';

export const CustomView = ({
  isScrolling = true,
  style,
  children,
  margin = false,
}: CustomViewProps) => {
  const {colors} = use(ThemeContext);
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        {backgroundColor: colors.background},
        style,
      ]}
    >
      {isScrolling ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, marginTop: top}}
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </View>
  );
};
