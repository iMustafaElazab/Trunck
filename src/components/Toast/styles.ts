import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    borderRadius: ms(8),
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    borderStartWidth: ms(8),
  },
  text: {
    margin: ms(8),
  },
});

export default styles;
