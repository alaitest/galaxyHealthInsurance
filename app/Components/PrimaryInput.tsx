import React, {memo} from 'react';
import {StyleSheet} from 'react-native';

import {TextInput} from 'react-native-paper';

type InputProps = {
  value?: string;
  onChange: (text: string) => void;
  mode?: 'flat' | 'outlined';
};

const PrimaryInput = (prop: InputProps) => {
  return (
    <TextInput
      label="Email"
      value={prop.value ?? ''}
      mode={prop.mode ?? 'outlined'}
      onChangeText={prop.onChange}></TextInput>
  );
};

export default memo(PrimaryInput);

const styles = StyleSheet.create({
  container: {},
  inputContainer: {},
});
