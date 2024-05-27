import React, { memo } from "react";
import { StyleSheet, ViewStyle, Pressable } from "react-native";
import { Icon } from "@rneui/base";
import { AppColor, Size } from "../Utils";

type IconProps = {
  name: string;
  type?: any;
  size?: number;
  color?: string;
  onPress?: any;
  btnStyle?: ViewStyle[];
  iconStyle?: ViewStyle;
};

const TouchableIcon = (prop: IconProps) => {
  return (
    <Pressable
      style={prop.btnStyle}
      hitSlop={15}
      android_ripple={{
        color: AppColor.lightGrey,
        borderless: true,
        foreground: true,
      }}
      onPress={prop.onPress}
    >
      <Icon
        name={prop.name}
        type={prop.type}
        size={prop.size}
        color={prop.color}
        style={prop.iconStyle}
      />
    </Pressable>
  );
};

export default memo(TouchableIcon);

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    height: Size.height / 17,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: Size.width / 50,
    borderWidth: 0,
    borderBottomColor: "transparent",
    padding: Size.width / 80,
    paddingLeft: Size.width / 40,
    height: Size.height / 17,
  },
});
