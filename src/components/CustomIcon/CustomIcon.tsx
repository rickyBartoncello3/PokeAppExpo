import React from 'react';
import type {TabBarIconProps} from './interfaces.ts';
import {iconMapper} from '@/src/utils/mappers/iconMapper';
import {ICON_NAMES} from '@/src/constants/iconNames';
import {HugeiconsIcon} from '@hugeicons/react-native';

export const CustomIcon = ({
  name,
  color,
  size = 24,
  strokeWidth = 1.8,
  fillColor = 'transparent',
}: TabBarIconProps) => {
  const icon = iconMapper[name] ?? iconMapper[ICON_NAMES.ADD_TRANSACTION];

  return (
    <HugeiconsIcon
      icon={icon}
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      fill={fillColor}
    />
  );
};
