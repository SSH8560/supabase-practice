import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface InputProps {
  label: string;
  errroMessage?: string;
  value: string;
  onChange: (text: string) => void;
  secret?: boolean;
}

const Input = ({label, errroMessage, value, onChange, secret}: InputProps) => {
  const isError = Boolean(errroMessage);

  return (
    <View>
      <View style={[styles.inputContainer, isError && styles.error]}>
        <Text style={[styles.labelText, isError && styles.error]}>{label}</Text>
        <TextInput
          style={styles.inputText}
          secureTextEntry={secret}
          onChangeText={onChange}
          value={value}
        />
      </View>
      {errroMessage && (
        <Text style={[styles.errorText, styles.error]}>{errroMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  labelText: {
    position: 'absolute',
    top: -9,
    left: 9,
    zIndex: 1,
    backgroundColor: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  inputContainer: {
    position: 'relative',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  inputText: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  errorText: {
    fontWeight: '600',
  },
  error: {
    color: 'red',
    borderColor: 'red',
  },
});

export default Input;
