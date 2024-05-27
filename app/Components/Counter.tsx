import React, { memo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ViewStyle,
  TextStyle,
} from "react-native";
import TouchableIcon from "./TouchableIcon";
import { AppColor, Size } from "../Utils";
import PrimaryInput from "./PrimaryInput";
// import styles from './styles';

type CounterButtonProps = {
  onSubmit?: any;
  disabled?: boolean;
  btnStyle?: ViewStyle;
  btnTexStyle?: TextStyle;
  btnName?: String;
  onRemove?: any;
  onAdd?: any;
  value?: string;
  onTextChange: (text: string) => void;
};

const Counter = (props: CounterButtonProps) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableIcon
        btnStyle={{
          width: Size.width / 10,
          height: Size.width / 10,
          backgroundColor: AppColor.appWhite,
          justifyContent: "center",
          borderRadius: Size.width / 50,
          borderWidth: 1,
          borderColor: AppColor.primary,
        }}
        name={"remove"}
        onPress={props.onRemove}
      />
      <PrimaryInput
        container={{ width: Size.width / 4 }}
        inputContainer={{
          height: Size.width / 10,
          borderWidth: 1,
          borderColor: AppColor.primary,
          borderBottomWidth: 1,
          borderBottomColor: AppColor.primary,
        }}
        inputStyle={{ textAlign: "center" }}
        value={props.value}
        keyboardType={"number-pad"}
        onChange={props.onTextChange}
      />
      <TouchableIcon
        btnStyle={{
          width: Size.width / 10,
          height: Size.width / 10,
          backgroundColor: AppColor.appWhite,
          justifyContent: "center",
          borderRadius: Size.width / 50,
          borderWidth: 1,
          borderColor: AppColor.primary,
        }}
        name={"plus"}
        type={"material-community"}
        onPress={props.onAdd}
      />
    </View>
  );
};

export default memo(Counter);
