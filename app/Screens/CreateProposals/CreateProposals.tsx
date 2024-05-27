import React, { useRef, useState } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import CoverDetails from "./CoverDetails/CoverDetails";
import commonStyles from "../../Utils/commonStyles";
import { AppColor, AppFonts, IconType } from "../../Utils";
import { Chip, Icon } from "@rneui/themed";
import { Divider } from "react-native-paper";
import HeaderTitle from "../../ReuseComponents/HeaderTitle";
import { ChipItemProps, headerData } from "./config";

const CreateProposals = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const flatListRef = useRef<FlatList<any>>(null);

  const ChipItem: React.FC<ChipItemProps> = ({
    index,
    title,
    onPress,
    isActive,
  }) => (
    <Pressable
      onPress={() => onPress(index)}
      style={[
        styles.chipPressable,
        {
          backgroundColor: isActive ? AppColor.appWhite : AppColor.onTertiary,
          borderRadius: isActive ? 50 : 300,
        },
      ]}
    >
      {index >= activeIndex && (
        <Chip
          title={`${index + 1}`}
          buttonStyle={styles.chip}
          color={AppColor.primary}
        />
      )}
      {index < activeIndex && (
        <Icon
          name="check"
          type={IconType.MaterialCommunity}
          reverse
          color={AppColor.green}
          size={10}
        />
      )}

      <Text
        style={[
          styles.chipText,
          { color: isActive ? AppColor.primary : AppColor.appWhite },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );

  const ScrollToIndex = (value: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index: value,
      });
    }
  };

  const handleChipPress = (index: number) => {
    const adjustedIndex = index === 0 ? index : index - 0.5;
    console.log(index);
    ScrollToIndex(adjustedIndex);
    setActiveIndex(index);
  };
  return (
    <View style={[commonStyles.homeContainer, styles.container]}>
      <View style={styles.header}>
        <HeaderTitle label={AppFonts.createProposal} />
        <View style={styles.chipContainer}>
          <Divider style={styles.divider} />
          <FlatList
            ref={flatListRef}
            data={headerData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <ChipItem
                index={index}
                title={item}
                onPress={handleChipPress}
                isActive={activeIndex === index}
              />
            )}
          />
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <CoverDetails />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.primary,
  },
  header: {
    flex: 0.18,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  chipContainer: {
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
    alignSelf: "center",
  },
  divider: {
    backgroundColor: AppColor.appWhite,
    width: "95%",
    position: "absolute",
    borderWidth: 0.5,
    borderStyle: "dashed",
  },
  chipPressable: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 10,
    marginRight: 5,
  },
  chip: {
    padding: 0,
    paddingTop: 2,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 2,
  },
  chipText: {
    marginLeft: 8,
  },
  detailsContainer: {
    flex: 0.82,
    width: "100%",
    backgroundColor: AppColor.appWhite,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default CreateProposals;
