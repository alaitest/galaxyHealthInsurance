import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {AppColor} from '../../Utils';
import SVG from '../../Assets/SVG';
import {BarChart} from 'react-native-gifted-charts';
import HorizontalBarChart from '../../Components/HorizontalBarChart';
import {useNavigation} from '@react-navigation/native';
import {MainRoutes} from '../../Routes/Routes';

const Quotes = () => {
  const navigation = useNavigation();
  return (
    <View style={{width: '100%', height: '100%'}}>
      <TouchableOpacity
        style={{
          backgroundColor: AppColor.primary,
          width: 56,
          height: 56,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 12,
          position: 'absolute',
          bottom: 20,
          right: 10,
        }}
        onPress={e => (navigation as any).navigate(MainRoutes.CREATE_QUOTE)}>
        <SVG.AddQuote />
      </TouchableOpacity>
      <View>{/* <HorizontalBarChart /> */}</View>
    </View>
  );
};

export default Quotes;
