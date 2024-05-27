import React, { useState } from "react";
import { Text, View } from "react-native";
import commonStyles from "../../../Utils/commonStyles";
import PrimaryDropdown from "../../../Components/PrimaryDropdown";
import { RadioButton } from "react-native-paper";

const CoverDetails = () => {
  const [dropcheck, setdropchck] = useState<string>("");
  const [policyType, setPolicyType] = useState<string>("Fresh");
  const [coverType, setCoverType] = useState<string>("Individual");

  const data = [
    { label: "15L", value: "1" },
    { label: "10L", value: "2" },
    { label: "5L", value: "3" },
  ];

  const CommonRadioButtton = ({
    label,
    status,
    onPress,
  }: {
    label: string;
    status: boolean;
    onPress: (label: string) => void;
  }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <RadioButton
          
          onPress={() => onPress(label)}
          value={label}
          status={status ? "checked" : "unchecked"}
        />
        <Text>{label}</Text>
      </View>
    );
  };

  const RadioButtonGroup = ({
    headerText,
    buttonLabel1,
    buttonLabel2,
    type,
    onPress,
  }: {
    headerText: string;
    buttonLabel1: string;
    buttonLabel2: string;
    type: string;
    onPress: (selecteLabel: string) => void;
  }) => {
    return (
      <View style={{ width: "90%", alignSelf: "center", marginTop: "5%" }}>
        <Text>{headerText}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: "2%",
          }}
        >
          <CommonRadioButtton
            label={buttonLabel1}
            status={type == buttonLabel1}
            onPress={() => onPress(buttonLabel1)}
          />
          <CommonRadioButtton
            label={buttonLabel2}
            status={type == buttonLabel2}
            onPress={() => onPress(buttonLabel2)}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={[commonStyles.primaryContainer]}>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          marginTop: "5%",
        }}
      >
        <PrimaryDropdown
          list={data}
          placeholder={"Select the item"}
          value={dropcheck}
          setValue={(e) => setdropchck(e)}
          handleBlur={() => {}}
          editable={false}
          label={"Sum Insured"}
        />
      </View>
      <RadioButtonGroup
        headerText="Policy Type"
        buttonLabel1="Fresh"
        buttonLabel2="Portability"
        onPress={(e) => setPolicyType(e)}
        type={policyType}
      />
      <RadioButtonGroup
        headerText="Cover Type"
        buttonLabel1="Individual"
        buttonLabel2="Floater"
        onPress={(e) => setCoverType(e)}
        type={coverType}
      />
    </View>
  );
};

export default CoverDetails;
