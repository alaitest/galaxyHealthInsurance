import React, {memo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

import {TextInput} from 'react-native-paper';
import Fonts from '../Utils/fontSelections';

type InputProps = {
  value?: string;
  onChange: (text: string) => void;
  mode?: 'flat' | 'outlined';
  label?: string;
  outlineStyle?: ViewStyle;
  style?: ViewStyle;
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | undefined;
  onPressIn?: () => void;
};

const PrimaryInput = (prop: InputProps) => {
  return (
    <TextInput
      style={prop.style}
      outlineStyle={prop.outlineStyle}
      label={prop.label}
      value={prop.value ?? ''}
      mode={prop.mode ?? 'outlined'}
      onChangeText={prop.onChange}
      contentStyle={[{fontFamily: Fonts.DMSansMedium}]}
      keyboardType={prop.keyboardType}
      returnKeyType="done"
      onPressIn={prop.onPressIn}></TextInput>
  );
};

export default memo(PrimaryInput);

const styles = StyleSheet.create({
  container: {},
  inputContainer: {},
});
