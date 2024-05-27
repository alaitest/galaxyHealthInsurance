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
import Fonts from "../Utils/fontSelections";
import { AppColor } from "../Utils";
import { Icon } from "@rneui/base";
// import styles from './styles';

const { width, height } = Dimensions.get("screen");

type InputButtonProps = {
  onSubmit?: any;
  disabled?: boolean;
  btnStyle?: ViewStyle;
  btnTexStyle?: TextStyle;
  btnName?: string;
  leftIcon?: boolean;
  iconName?: string | "close";
};

const PrimaryButton = (props: InputButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.onSubmit}
      disabled={props.disabled ?? false}
      style={[
        styles.primaryBtn,
        props.btnStyle,
        props.disabled && { opacity: 0.5 },
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        {props.leftIcon && <Icon name={props.iconName as string} />}
        <Text style={[styles.btnName, props.btnTexStyle]}>
          {props.btnName ?? "Press Me"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryBtn: {
    width: "80%",
    height: width / 10,
    backgroundColor: AppColor.primary, // Colors.primaryAppColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width / 50,
  },
  btnName: {
    fontSize: width / 28,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    fontFamily: Fonts.SOURCESANSBOLD,
    fontWeight: "bold",
  },
});

export default PrimaryButton;
