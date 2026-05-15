import {StyleProp, ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export interface CustomViewProps {
  isScrolling?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
  margin?: boolean;
}
