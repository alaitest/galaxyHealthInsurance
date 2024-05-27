import { Icon } from "@rneui/base";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppColor, AppFonts, IconType } from "../Utils";
import commonStyles from "../Utils/commonStyles";
import { useNavigation } from "@react-navigation/native";

type Iprop = {
  label: string;
};

const HeaderTitle = (prop: Iprop) => {
  const navigation = useNavigation();
  return (
    <View style={innerStyles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name={"arrow-left"}
          type={IconType.MaterialCommunity}
          color={AppColor.appWhite}
        />
      </TouchableOpacity>
      <Text style={[commonStyles.headerText, innerStyles.labelStyle]}>
        {prop.label}
      </Text>
    </View>
  );
};

const innerStyles = StyleSheet.create({
  container: { flexDirection: "row", width: "90%", alignSelf: "center" },
  labelStyle: { color: AppColor.appWhite, marginLeft: 10 },
});

export default HeaderTitle;
