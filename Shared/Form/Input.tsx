import React from 'react';
import { KeyboardTypeOptions, TextInput, StyleSheet } from 'react-native';
import { Text, Box } from '../../Components/restyle/Restyle';

interface Props {
  placeholder: string;
  name: string;
  id: string;
  value: string;
  autoCorrect: boolean;
  onChangeText: (text: string) => void;
  onFocus: () => void;
  secureTextEntry: boolean;
  keyboardType: KeyboardTypeOptions;
}

const Input = (props: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      value={props.value}
      autoCorrect={props.autoCorrect}
      onChangeText={props.onChangeText}
      onFocus={props.onFocus}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderWidth: 2,
    borderColor: 'orange',
    padding: 10,
    marginVertical: 5,
  },
});

export default Input;
