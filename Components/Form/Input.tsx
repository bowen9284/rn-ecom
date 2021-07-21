import React from 'react';
import { KeyboardTypeOptions, TextInput, StyleSheet } from 'react-native';

interface Props {
  placeholder: string;
  value: string;
  autoCorrect?: boolean;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
}

const Input = ({
  placeholder,
  value,
  autoCorrect = true,
  onChangeText,
  onFocus,
  secureTextEntry = false,
  keyboardType = 'default',
}: Props) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    value={value}
    autoCorrect={autoCorrect}
    onChangeText={onChangeText}
    onFocus={onFocus}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: 'orange',
    padding: 10,
    marginVertical: 5,
  },
});

export default Input;
