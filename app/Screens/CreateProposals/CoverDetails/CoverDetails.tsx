import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import commonStyles from '../../../Utils/commonStyles';
import PrimaryDropdown from '../../../Components/PrimaryDropdown';
import {RadioButton} from 'react-native-paper';
import Counter from '../../../Components/Counter';
import CustomDatePicker from '../../../Components/CustomDatePicker';
import ButtonText from '../../../Components/ButtonText';
import {AppColor, Size} from '../../../Utils';
import PrimaryInput from '../../../Components/PrimaryInput';
import moment from 'moment';
import AppColors from '../../../Utils/Appcolor';

const CoverDetails = () => {
  const [dropcheck, setdropchck] = useState<string>('');
  const [policyType, setPolicyType] = useState<string>('Fresh');
  const [coverType, setCoverType] = useState<string>('Individual');
  const [noOfAdults, setNoOfAdults] = useState<string>('00');
  const [noOfChilderen, setNoOfChilderen] = useState<string>('00');
  const [noOfParents, setNoOfParents] = useState<string>('00');
  const [dobOfEldest, setDobOfEldest] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const [showdatePicker, setShowDatePicker] = useState<boolean>(false);

  const data = [
    {label: '15L', value: '1'},
    {label: '10L', value: '2'},
    {label: '5L', value: '3'},
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
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 5,
        }}>
        <RadioButton
          onPress={() => onPress(label)}
          value={label}
          status={status ? 'checked' : 'unchecked'}
        />
        <Text style={[commonStyles.textContent]}>{label}</Text>
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
      <View style={{width: '90%', alignSelf: 'center', marginTop: '5%'}}>
        <Text style={[commonStyles.subHeaderText]}>{headerText}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '2%',
          }}>
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
    <View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '5%',
        }}>
        <PrimaryDropdown
          list={data}
          placeholder={'Select the item'}
          value={dropcheck}
          setValue={e => setdropchck(e)}
          handleBlur={() => {}}
          editable={false}
          label={'Sum Insured'}
        />
      </View>
      <RadioButtonGroup
        headerText="Policy Type"
        buttonLabel1="Fresh"
        buttonLabel2="Portability"
        onPress={e => setPolicyType(e)}
        type={policyType}
      />
      <RadioButtonGroup
        headerText="Cover Type"
        buttonLabel1="Individual"
        buttonLabel2="Floater"
        onPress={e => setCoverType(e)}
        type={coverType}
      />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={commonStyles.textContent}>No. of adults</Text>
        <Counter
          onTextChange={e => {
            console.log(e);
            setNoOfAdults(e);
          }}
          value={noOfAdults}
          onButtonPress={e => {
            console.log(e);
            setNoOfAdults(e);
          }}
        />
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={commonStyles.textContent}>No. of Children</Text>
        <Counter
          onTextChange={e => {
            console.log(e);
            setNoOfChilderen(e);
          }}
          value={noOfChilderen}
          onButtonPress={e => {
            console.log(e);
            setNoOfChilderen(e);
          }}
        />
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={commonStyles.textContent}>No. of Parents</Text>
        <Counter
          onTextChange={e => {
            console.log(e);
            setNoOfParents(e);
          }}
          value={noOfParents}
          onButtonPress={e => {
            console.log(e);
            setNoOfParents(e);
          }}
        />
      </View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          marginTop: '5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ButtonText
          btnStyle={{
            width: '100%',
            height: Size.height / 17,
            justifyContent: 'center',
            paddingLeft: 10,
            backgroundColor: AppColor.appWhite,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: AppColor.appGray,
            marginBottom: 15,
          }}
          btnTexStyle={{
            color: dobOfEldest === '' ? '#8B8B8D' : '#000000',
          }}
          labelText={dobOfEldest?.length == 0 ? '' : 'DOB of Eldest Member'}
          btnName={
            dobOfEldest?.length == 0 ? 'DOB of Eldest Member' : dobOfEldest
          }
          onSubmit={() => {
            console.log('nknk');
            setShowDatePicker(!showdatePicker);
          }}
          rightIcon={true}
          iconName="date-range"
        />
        <CustomDatePicker
          modal={true}
          mode={'date'}
          open={showdatePicker}
          date={new Date()}
          onCancel={() => setShowDatePicker(!showdatePicker)}
          onConfirm={e => {
            setDobOfEldest(moment(e).format('DD/MM/YYYY'));
            setShowDatePicker(!showdatePicker);
          }}
        />
      </View>
      <View
        style={{
          width: '90%',
          marginTop: '5%',
          alignSelf: 'center',
        }}>
        <PrimaryInput
          value={age}
          onChange={e => setAge(e)}
          style={{backgroundColor: AppColors.appWhite}}
          label={'Age'}
          keyboardType="numeric"
        />
      </View>
      <View style={{height: 60, width: '100%'}} />
    </View>
  );
};

export default CoverDetails;
