import React, {useState} from 'react';
import {Text, View} from 'react-native';
import commonStyles from '../../../Utils/commonStyles';
import PrimaryDropdown from '../../../Components/PrimaryDropdown';
import {RadioButton, Switch} from 'react-native-paper';
import Counter from '../../../Components/Counter';
import CustomDatePicker from '../../../Components/CustomDatePicker';
import ButtonText from '../../../Components/ButtonText';
import PrimaryInput from '../../../Components/PrimaryInput';
import moment from 'moment';
import AppColors from '../../../Utils/Appcolor';
import {innerStyles} from './styles';
import {DateRangeProps} from './config';

const CoverDetails = () => {
  const [dropcheck, setdropchck] = useState<string>('');
  const [coverTenure, setCoverTenure] = useState<string>('');

  const [policyType, setPolicyType] = useState<string>('Fresh');
  const [coverType, setCoverType] = useState<string>('Individual');
  const [noOfAdults, setNoOfAdults] = useState<string>('00');
  const [noOfChilderen, setNoOfChilderen] = useState<string>('00');
  const [noOfParents, setNoOfParents] = useState<string>('00');
  const [dobOfEldest, setDobOfEldest] = useState<string>('');
  const [coverStDate, setCoverStDate] = useState<string>('');
  const [coverEndDate, setCoverEndDate] = useState<string>('');
  const [isEmiEnabled, setIsEmiEnabled] = useState<boolean>(false);

  const [age, setAge] = useState<string>('');

  const [showdatePicker, setShowDatePicker] = useState<boolean>(false);
  const [showCoverStPicker, setCoverStPicker] = useState<boolean>(false);
  const [showCoverEndPicker, setCoverEndPicker] = useState<boolean>(false);

  const data = [
    {label: '15L', value: '1'},
    {label: '10L', value: '2'},
    {label: '5L', value: '3'},
  ];

  const tenure = [
    {label: '1 Year', value: '1'},
    {label: '2 Year', value: '2'},
    {label: '3 Year', value: '3'},
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

  const DatePickerWidget = ({
    value,
    isDateVisible,
    datePickFun,
    selectedDateFun,
    label,
  }: DateRangeProps) => {
    return (
      <>
        <ButtonText
          btnStyle={innerStyles.primaryBt}
          btnTexStyle={{
            color: value === '' ? '#8B8B8D' : '#000000',
          }}
          labelText={value?.length == 0 ? '' : label}
          btnName={value?.length == 0 ? label : value}
          onSubmit={() => datePickFun(!isDateVisible)}
          rightIcon={true}
          iconName="date-range"
        />
        <CustomDatePicker
          modal={true}
          mode={'date'}
          open={isDateVisible}
          date={new Date()}
          onCancel={() => datePickFun(!isDateVisible)}
          onConfirm={e => {
            selectedDateFun(moment(e).format('DD/MM/YYYY'));
            datePickFun(!isDateVisible);
          }}
        />
      </>
    );
  };

  return (
    <View>
      <View style={innerStyles.container}>
        <PrimaryDropdown
          list={data}
          placeholder={'Sum Insured'}
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
      <View style={[innerStyles.container, innerStyles.counterContainer]}>
        <Text style={commonStyles.textContent}>No. of adults</Text>
        <Counter
          onTextChange={e => {
            setNoOfAdults(e);
          }}
          value={noOfAdults}
          onButtonPress={e => {
            setNoOfAdults(e);
          }}
        />
      </View>
      <View style={[innerStyles.container, innerStyles.counterContainer]}>
        <Text style={commonStyles.textContent}>No. of Children</Text>
        <Counter
          onTextChange={e => {
            setNoOfChilderen(e);
          }}
          value={noOfChilderen}
          onButtonPress={e => {
            setNoOfChilderen(e);
          }}
        />
      </View>
      <View style={[innerStyles.container, innerStyles.counterContainer]}>
        <Text style={commonStyles.textContent}>No. of Parents</Text>
        <Counter
          onTextChange={e => {
            setNoOfParents(e);
          }}
          value={noOfParents}
          onButtonPress={e => {
            setNoOfParents(e);
          }}
        />
      </View>
      <View style={[innerStyles.container, innerStyles.counterContainer]}>
        <DatePickerWidget
          value={dobOfEldest}
          isDateVisible={showdatePicker}
          selectedDateFun={e => {
            setShowDatePicker(false);
            setDobOfEldest(e);
          }}
          datePickFun={e => setShowDatePicker(e)}
          label="Cover start date"
        />
      </View>
      <View style={innerStyles.secondaryContainer}>
        <PrimaryInput
          value={age}
          onChange={e => setAge(e)}
          style={{backgroundColor: AppColors.appWhite}}
          label={'Age'}
          keyboardType="numeric"
        />
      </View>
      <View
        style={[
          innerStyles.secondaryContainer,
          {
            marginTop: coverTenure.length > 0 ? '3%' : '5%',
          },
        ]}>
        <PrimaryDropdown
          list={tenure}
          placeholder={'Cover Tenure'}
          value={coverTenure}
          setValue={e => setCoverTenure(e)}
          handleBlur={() => {}}
          editable={false}
          label={'Sum Insured'}
        />
      </View>
      <View style={[innerStyles.container, innerStyles.counterContainer]}>
        <DatePickerWidget
          value={coverStDate}
          isDateVisible={showCoverStPicker}
          selectedDateFun={e => {
            setCoverStPicker(false);
            setCoverStDate(e);
          }}
          datePickFun={e => setCoverStPicker(e)}
          label="Cover start date"
        />
      </View>
      <View style={[innerStyles.container, innerStyles.counterContainer]}>
        <DatePickerWidget
          value={coverEndDate}
          isDateVisible={showCoverEndPicker}
          selectedDateFun={e => {
            setCoverEndPicker(false);
            setCoverEndDate(e);
          }}
          datePickFun={e => setCoverEndPicker(e)}
          label="Cover End date"
        />
      </View>
      <View style={[innerStyles.container]}>
        <Text style={commonStyles.subHeaderText}>Premium breakup</Text>
        <Text style={[commonStyles.textContent, {marginTop: '3%'}]}>
          The final premium will be determined based on the medical conditions
          disclosed in the proposal form and subsequent evaluate underwriter
        </Text>
      </View>
      <View style={[innerStyles.container, innerStyles.counterContainer]}>
        <Text style={commonStyles.subHeaderText}>Show me EMI Options</Text>
        <Switch
          value={isEmiEnabled}
          onValueChange={() => setIsEmiEnabled(!isEmiEnabled)}
        />
      </View>
      <View style={{height: 60, width: '100%'}} />
    </View>
  );
};

export default CoverDetails;
