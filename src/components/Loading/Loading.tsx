import React, {use, useEffect, useRef} from 'react';
import {Animated, Easing, View} from 'react-native';

import {LoadingProps} from '@/src/components/Loading/interfaces';
import {CustomIcon} from '@/src/components/CustomIcon/CustomIcon';
import {ICON_NAMES} from '@/src/constants/iconNames';
import {ThemeContext} from '@/src/providers/ThemeProvider';

export const Loading = ({isLoading}: LoadingProps) => {
  const {colors} = use(ThemeContext);
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isLoading) {
      rotateValue.stopAnimation();
      rotateValue.setValue(0);
      return;
    }

    const animation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 900,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    animation.start();

    return () => {
      animation.stop();
      rotateValue.setValue(0);
    };
  }, [isLoading, rotateValue]);

  if (!isLoading) {
    return null;
  }

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Animated.View style={{transform: [{rotate}]}}>
        <CustomIcon name={ICON_NAMES.POKEBALL} size={40} color={colors.text} />
      </Animated.View>
    </View>
  );
};
