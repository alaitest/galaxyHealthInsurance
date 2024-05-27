import React, {memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
} from 'react-native';
import TouchableIcon from './TouchableIcon';
import {AppColor, Size} from '../Utils';
import PrimaryInput from './PrimaryInput';
// import styles from './styles';

type CounterButtonProps = {
  onSubmit?: any;
  disabled?: boolean;
  btnStyle?: ViewStyle;
  btnTexStyle?: TextStyle;
  btnName?: string;
  onButtonPress: (text: string) => void;
  value?: string;
  onTextChange: (text: string) => void;
};

const Counter = (props: CounterButtonProps) => {
  const CountNo = (type: string) => {
    var currentCount = parseInt(props.value ?? '0');
    console.log('props.value===>', props.value);
    console.log(type);
    if (type == 'ADD' && currentCount > -1) {
      currentCount = currentCount + 1;
      console.log(currentCount);
    }
    if (type == 'SUB' && currentCount > 0) {
      currentCount = currentCount - 1;
    }
    var newCount: string;
    if (currentCount < 10) {
      newCount = `0${currentCount.toString() ?? '0'}`;
    } else {
      newCount = `${currentCount.toString() ?? '0'}`;
    }

    props.onButtonPress(newCount);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
      }}>
      <TouchableIcon
        btnStyle={{
          justifyContent: 'center',
          margin: 10,
        }}
        name={'remove'}
        onPress={() => CountNo('SUB')}
      />
      <PrimaryInput
        value={props.value}
        onChange={props.onTextChange}
        outlineStyle={{borderWidth: 0}}
        keyboardType="numeric"
        style={{
          backgroundColor: 'transparent',
          height: 40,
          width: Size.width / 8,
          justifyContent: 'center',
        }}
      />
      <TouchableIcon
        btnStyle={{
          justifyContent: 'center',
          margin: 10,
        }}
        name={'plus'}
        type={'material-community'}
        onPress={() => CountNo('ADD')}
      />
    </View>
  );
};

export default memo(Counter);
