import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppColor } from "../../Utils";
import SVG from "../../Assets/SVG";
import { useNavigation } from "@react-navigation/native";
import { MainRoutes } from "../../Routes/Routes";

const Proposal = () => {
  const navigation = useNavigation();
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <TouchableOpacity
        style={{
          backgroundColor: AppColor.primary,
          width: 56,
          height: 56,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
          position: "absolute",
          bottom: 20,
          right: 10,
        }}
        onPress={(e) =>
          (navigation as any).navigate(MainRoutes.CREATE_PROPOSALS)
        }
      >
        <SVG.ProposalFilled />
      </TouchableOpacity>
      <View>{/* <HorizontalBarChart /> */}</View>
    </View>
  );
};

export default Proposal;
