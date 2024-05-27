import React, { useState } from "react";
import { Text, View } from "react-native";
import PrimaryDropdown from "../../Components/PrimaryDropdown";
import PrimaryInput from "../../Components/PrimaryInput";
import { Checkbox, RadioButton } from "react-native-paper";

const Home = () => {
  const data = [
    { label: "check1", value: "1" },
    { label: "check2", value: "2" },
  ];

  const [dropcheck, setdropchck] = useState("");
  return (
    <View
      style={{
        width: "80%",
        height: 10,
        alignSelf: "center",
        marginTop: 50,
      }}
    >
      <PrimaryDropdown
        list={data}
        placeholder={"Select the item"}
        value={dropcheck}
        setValue={(e) => setdropchck(e)}
        handleBlur={() => {}}
        editable={false}
        label={"cjkj"}
      />
      <PrimaryInput onChange={() => console.log("")} />
      <RadioButton status="checked" value="bjb" />
      <Checkbox status="unchecked" />
    </View>
  );
};

export default Home;
