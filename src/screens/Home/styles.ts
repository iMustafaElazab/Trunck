import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: vs(8),
  },
  scrollViewContent: {
    paddingVertical: vs(8),
    gap: vs(8),
  },
});

export default styles;
