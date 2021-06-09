import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
} from '@shopify/restyle';

import { Text } from './Restyle';
import { Theme } from '../../util/theme';

const restyleFunctions = [spacing, border, backgroundColor];

type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void;
    label: string;
    variant?: any;
  };

const Button = ({ onPress, label, variant, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text variant={variant || 'defaultButtonLabel'}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
