import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface TextAreaProps {
  label: string;
  errroMessage?: string;
  value: string;
  onChange: (text: string) => void;
}

const TextArea = ({label, onChange, value, errroMessage}: TextAreaProps) => {
  const isError = Boolean(errroMessage);

  return (
    <View style={{flex: 1}}>
      <View style={[styles.inputContainer, isError && styles.error]}>
        <Text style={[styles.labelText, isError && styles.error]}>{label}</Text>
        <TextInput
          multiline
          style={[styles.inputText]}
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
    paddingHorizontal: 4,
    zIndex: 1,
    backgroundColor: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  inputText: {
    flex: 1,
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

export default TextArea;
