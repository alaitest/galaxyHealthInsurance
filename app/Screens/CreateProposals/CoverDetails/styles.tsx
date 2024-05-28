import {StyleSheet, ViewStyle} from 'react-native';
import {AppColor, Size} from '../../../Utils';

interface Styles {
  container: ViewStyle;
  counterContainer: ViewStyle;
  secondaryContainer: ViewStyle;
  primaryBt: ViewStyle;
}

export const innerStyles = StyleSheet.create<Styles>({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },
  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondaryContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  primaryBt: {
    width: '100%',
    height: Size.height / 17,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: AppColor.appWhite,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: AppColor.appGray,
    marginBottom: 15,
  },
});
