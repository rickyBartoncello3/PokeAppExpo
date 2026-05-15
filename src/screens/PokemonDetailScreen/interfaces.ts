import {StyleProp, ViewStyle} from 'react-native';
import {ButtonProps as RNButtonProps} from 'react-native-paper';
import {ReactNode} from "react";

export interface CustomViewProps {
    isScrolling?: boolean;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
    margin?: boolean;
}
