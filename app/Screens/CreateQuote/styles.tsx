// HomepageStyles.js
import { StyleSheet } from "react-native";
import { AppColor } from "../../Utils";
import Fonts from "../../Utils/fontSelections";

const innerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  blueSection: {
    backgroundColor: AppColor.primary,
  },
  whiteSection: {
    flex: 1,
    backgroundColor: AppColor.appWhite,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  sectionChips: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColor.chipColor,
    borderWidth: 1,
    borderColor: AppColor.primary,
  },
  iconContainer: {
    elevation: 50,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginRight: 10,
  },
  icon: {
    backgroundColor: AppColor.chipColor,
    width: 50,
    height: 60,
    elevation: 50,
    paddingTop: 13,
    paddingHorizontal: 10,
  },
  flatListContainer: {
    flexDirection: "row",
  },
  chip: {
    marginRight: 10,
    backgroundColor: AppColor.appWhite,
    borderRadius: 50,
    width: 120,
    height: 40,
  },
  buttonGroupContainer: {
    height: 50,
    marginTop: 20,
  },
  buttonGroupText: {
    color: AppColor.secondary,
  },
  selectedButton: {
    backgroundColor: AppColor.primary,
  },
  buttonGroupWrapper: {
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButtonContainer: {
    backgroundColor: AppColor.primary,
  },
  buttonText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: AppColor.appWhite,
  },
  selectedButtonText: {
    fontWeight: "bold",
    color: "#fff",
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: AppColor.primary,
    width: "90%",
    alignSelf: "center",
  },
  topSection: {
    backgroundColor: AppColor.quotePrimary,
    padding: 10,
  },
  topSectionText: {
    color: AppColor.primary,
    textAlign: "center",
    fontSize: 16,
    fontFamily: Fonts.SOURCESANSBOLD,
    width: "100%",
    padding: 10,
    backgroundColor: AppColor.quotePrimary,
  },
  cardSection: {
    padding: 10,
  },
  cardText: {
    color: "#333",
    fontWeight: "bold",
  },
  dottedLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderStyle: "dashed",
    marginVertical: 10,
  },
  solidLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 10,
  },
  btnConatiner: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnchild: {
    marginHorizontal: 170,
    bottom: 65,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemKey: {
    fontWeight: "bold",
  },
  itemValue: {
    flex: 1,
    textAlign: "right",
    fontWeight: "bold",
    color: "#333",
  },
});

export default innerStyles;
