import {
  StyleSheet,
  TextStyle,
  ViewStyle,
  Platform,
  ImageStyle,
  Dimensions,
} from "react-native";
import { AppColor, Size } from ".";
import Fonts from "./fontSelections";

interface Styles {
  flex1: ViewStyle;
  primaryContainer: ViewStyle;
  homeContainer: ViewStyle;
  headerText: TextStyle;
}

const { width, height } = Dimensions.get("screen");

const commonStyles = StyleSheet.create<Styles>({
  //new styles for project
  flex1: {
    flex: 1,
  },
  primaryContainer: {
    flex: 1,
  },
  homeContainer: {
    width: Size.width,
    height: Size.height,
  },
  headerText: {
    fontSize: 18,
    fontFamily: Fonts.SOURCESANSBOLD,
  },
});

export default commonStyles;
