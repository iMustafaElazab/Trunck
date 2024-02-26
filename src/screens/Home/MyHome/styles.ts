import {StyleSheet} from 'react-native';
import {ms, vs} from 'react-native-size-matters';

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
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: ms(60),
    aspectRatio: 1,
    borderRadius: ms(30),
  },
});

export default styles;
