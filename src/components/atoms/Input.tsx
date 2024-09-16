import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  inputMode,
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      inputMode={inputMode}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});

export default Input;
