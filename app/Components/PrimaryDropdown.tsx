import React, { useState } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { AppColor } from "../Utils";
import { Icon } from "@rneui/themed";

type ListItem = {
  label: string;
  value: string;
};

type IProps = {
  list: ListItem[];
  label?: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  errorMsg?: string | undefined;
  handleBlur: (e: any) => void;
  containerStyle?: StyleProp<ViewStyle>;
  editable: boolean;
  selectedTextstyle?: StyleProp<ViewStyle>;
  dropdownstyle?: StyleProp<ViewStyle>;
  placeholderstyle?: StyleProp<ViewStyle>;
};

const PrimaryDropdown = ({
  list,
  label,
  placeholder,
  value,
  setValue,
  errorMsg,
  handleBlur,
  containerStyle,
  editable,
  selectedTextstyle,
  dropdownstyle,
  placeholderstyle,
}: IProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const _renderItem = (item: { label: string }) => {
    return (
      <View>
        <Text>{item?.label || "-"}</Text>
      </View>
    );
  };

  const renderLabel = (label: string) => {
    if (value || focused) {
      return (
        <Text
          style={[
            {
              fontSize: 14,
              color: AppColor.primary,
              zIndex: 1000,
              top: "10%",
              left: "7%",
              backgroundColor: AppColor.appWhite,
              width: "25%",
              textAlign: "center",
            },
          ]}
        >
          {label}
        </Text>
      );
    }
    return null;
  };

  return (
    <>
      {renderLabel(label ?? "")}
      <Dropdown
        selectedTextStyle={{
          color: "black",
          fontWeight: "condensedBold",
          fontSize: 16,
        }}
        style={[
          {
            borderRadius: 8,
            backgroundColor: "#FFFFFF",
            borderColor:
              focused || value.length !== 0 ? AppColor.primary : "#C7C7C7",
            borderWidth: 1,
            paddingHorizontal: 10,
            paddingVertical: 10,
          },
          dropdownstyle,
        ]}
        renderRightIcon={() => (
          <Icon
            type="material-community"
            color={focused ? "blue" : "black"}
            name={"chevron-down"}
            size={20}
          />
        )}
        itemContainerStyle={{ padding: 10, borderRadius: 8 }}
        containerStyle={{ marginTop: 0, borderRadius: 8 }}
        onFocus={() => setFocused(!focused)}
        onBlur={() => setFocused(false)}
        data={list}
        labelField="label"
        valueField="value"
        onChange={(item: { value: any; label: any }) => {
          setValue(item.value);
          setFocused(false);
        }}
        value={value}
        renderItem={(item) => _renderItem(item)}
        placeholder={placeholder}
        activeColor={AppColor.secondary}
      />
    </>
  );
};

export default PrimaryDropdown;
