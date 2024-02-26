import {StyleSheet} from 'react-native';
import {ms, vs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: vs(8),
  },
  scrollViewContent: {
    paddingVertical: vs(8),
    gap: vs(8),
  },
  borderheader: {
    backgroundColor: 'purple',
    borderBottomEndRadius: ms(8),
    borderBottomStartRadius: ms(8),
  },
  row: {
    flexDirection: 'row',
    height: ms(48),
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBar: {
    borderRadius: ms(8),
    height: ms(44),
    alignContent: 'center',
    marginTop: ms(16),
  },
});

export default styles;
