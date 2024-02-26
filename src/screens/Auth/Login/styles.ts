import {StyleSheet} from 'react-native';
import {vs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: vs(8),
  },
  scrollViewContent: {
    paddingVertical: vs(32),
    gap: vs(8),
  },
  btLogin: {
    marginTop: vs(32),
  },
  loadingIndicator: {
    marginTop: vs(32),
  },
});

export default styles;
