import {Dimensions, Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {AppColor, Size} from '../Utils';

const HorizontalBarChart = () => {
  const barData = [
    {
      value: 400,
      label: '30',
      frontColor: AppColor.primary,
      topLabelComponent: () => (
        <Text
          style={{
            color: AppColor.appWhite,
            fontSize: 10,
            zIndex: 10,
            position: 'absolute',
            width: 100,
            flexDirection: 'row',
          }}>
          ₹ 20,000
        </Text>
      ),
    },
    {
      value: 600,
      label: '15',
      frontColor: '#9BCFFD',
      topLabelComponent: () => (
        <Text
          style={{
            color: AppColor.primary,
            fontSize: 10,
            zIndex: 10,
            position: 'absolute',
            width: 100,
            flexDirection: 'row',
          }}>
          ₹ 20,000
        </Text>
      ),
    },
    {
      value: 400,
      label: '7',
      frontColor: '#D1DEF8',
      topLabelComponent: () => (
        <Text
          style={{
            color: AppColor.primary,
            fontSize: 10,
            zIndex: 10,
            position: 'absolute',
            width: 100,
            flexDirection: 'row',
          }}>
          ₹ 20,000
        </Text>
      ),
    },
  ];
  return (
    <View style={{height: Size.height / 4}}>
      <BarChart
        horizontal
        barWidth={15}
        barBorderRadius={4}
        frontColor="lightgray"
        data={barData}
        yAxisThickness={0}
        xAxisThickness={0}
        stepHeight={25}
        maxValue={610}
      />
    </View>
  );
};

export default HorizontalBarChart;
