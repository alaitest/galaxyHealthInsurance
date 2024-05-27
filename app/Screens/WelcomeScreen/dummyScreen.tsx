import {Text, View} from 'react-native';
import PrimaryInput from '../../Components/PrimaryInput';
import PrimaryButton from '../../Components/PrimaryButton';

const Dummy = () => {
  return (
    <View>
      <PrimaryInput onChange={e => console.log(e)} />
      <PrimaryButton />
    </View>
  );
};

export default Dummy;
