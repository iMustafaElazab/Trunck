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
  input: {
    padding: vs(4),
    borderRadius: vs(4),
    marginTop: vs(4),

    backgroundColor: '#eeede7',
  },
  button: {
    marginTop: vs(32),
    alignSelf: 'center',
    borderRadius: vs(4),
    padding: vs(4),
    height: 44,
    justifyContent: 'center',
    backgroundColor: '#145da0',
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
