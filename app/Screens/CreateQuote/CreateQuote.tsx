import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Chip } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { AppColor, Size } from "../../Utils";
import PrimaryButton from "../../Components/PrimaryButton";
import innerStyles from "./styles";
import commonStyles from "../../Utils/commonStyles";
import { ButtonGroup } from "@rneui/themed";

interface ChipData {
  label: string;
  icon: string;
}

interface ContentItem {
  key: string;
  value: string;
  highlight?: boolean;
}

interface ContentSection {
  title?: string;
  items: ContentItem[];
}

const CreateQuote: React.FC = () => {
  const blueHeight = Size.height * 0.15;
  const sectionChipsHeight = (Size.height * 0.15) / 2;

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const buttons: string[] = ["Option 1", "Option 2", "Option 3"];

  const chipsData: ChipData[] = [
    { label: "Chip 1", icon: "information" },
    { label: "Chip 2", icon: "information" },
    { label: "Chip 3", icon: "information" },
    { label: "Chip 4", icon: "information" },
    { label: "Chip 5", icon: "information" },
  ];

  const content: ContentSection[] = [
    {
      title: "Estimated breakup for 3 year",
      items: [
        { key: "Sum Insured", value: "₹15 Lakh" },
        { key: "Premium", value: "₹29,885.32" },
      ],
    },
    {
      title: "Extra feature",
      items: [
        { key: "Cumulative bonus booster", value: "₹1,664.00" },
        { key: "Coverage of Non-medical items", value: "₹2,496.00" },
      ],
    },
    {
      items: [
        { key: "TAX", value: "₹6,739.00", highlight: true },
        { key: "Total Premium", value: "₹44,179.00", highlight: true },
      ],
    },
  ];

  const contentArray: ContentSection[][] = [content, content, content];

  return (
    <View style={commonStyles.primaryContainer}>
      <View style={[innerStyles.blueSection, { height: blueHeight }]} />
      <View style={innerStyles.whiteSection}>
        <View
          style={[innerStyles.sectionChips, { height: sectionChipsHeight }]}
        >
          <View style={innerStyles.iconContainer}>
            <Icon name="information" size={30} style={innerStyles.icon} />
          </View>
          <FlatList
            data={chipsData}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Chip icon={item.icon} style={innerStyles.chip}>
                {item.label}
              </Chip>
            )}
            contentContainerStyle={innerStyles.flatListContainer}
          />
        </View>
        <View
          style={{
            flex: 0.8,
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ width: "100%" }}>
            <ButtonGroup
              buttons={[
                `₹ 14,265\n3 years`,
                "₹ 13,212\n2 years",
                "₹ 12,100\n1 years",
              ]}
              selectedIndex={selectedIndex}
              onPress={(value) => {
                setSelectedIndex(value);
              }}
              innerBorderStyle={{ width: 0.5 }}
              buttonContainerStyle={{ borderWidth: 0 }}
              selectedButtonStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                backgroundColor: AppColor.primary,
              }}
              selectedTextStyle={{ textAlign: "center" }}
              textStyle={{ color: "#606060", textAlign: "center" }}
              disabledTextStyle={{ textAlign: "center" }}
              containerStyle={{
                backgroundColor: "#F6F7F9",
                borderWidth: 1,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                marginBottom: 0,
                width: "90%",
                alignSelf: "center",
              }}
              buttonStyle={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />

            <View style={innerStyles.card}>
              <Text style={innerStyles.topSectionText}>You save ₹7,661.00</Text>
              {contentArray[selectedIndex].map((section, sectionIndex) => (
                <View key={sectionIndex} style={innerStyles.cardSection}>
                  {section.title && (
                    <Text
                      style={[innerStyles.cardText, { fontWeight: "bold" }]}
                    >
                      {section.title}
                    </Text>
                  )}
                  {section.items.map((item, itemIndex) => (
                    <View key={itemIndex} style={innerStyles.itemContainer}>
                      <Text
                        style={[
                          innerStyles.itemKey,
                          item.highlight && { color: AppColor.primary },
                        ]}
                      >
                        {item.key}
                      </Text>
                      <Text
                        style={[
                          innerStyles.itemValue,
                          item.highlight && { color: AppColor.primary },
                        ]}
                      >
                        {item.value}
                      </Text>
                    </View>
                  ))}
                  {sectionIndex !== contentArray[selectedIndex].length - 1 && (
                    <View style={innerStyles.solidLine} />
                  )}
                </View>
              ))}
            </View>
          </View>

          <View style={innerStyles.btnConatiner}>
            <PrimaryButton
              btnName="Save Quote"
              btnStyle={{
                width: "40%",
                backgroundColor: AppColor.appWhite,
                borderWidth: 1,
                borderColor: AppColor.primary,
              }}
              btnTexStyle={{ color: AppColor.primary }}
            />

            <PrimaryButton
              btnName="Continue with Proposal"
              btnStyle={{ width: "50%" }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateQuote;
