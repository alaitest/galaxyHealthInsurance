import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");
const spacing = 8;
const Size = {
  spacing,
  height,
  width,
  borderRadius: 8,
};

const IconType = {
  MaterialCommunity: "material-community",
};
export { Size, IconType };
