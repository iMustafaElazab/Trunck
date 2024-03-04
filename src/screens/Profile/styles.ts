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
  image: {
    height: ms(120),
    aspectRatio: 1,
    borderRadius: ms(60),
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'red',
  },
  addIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  rowCenter: {
    alignItems: 'center',
  },
  imageContentContainerStyle: {
    backgroundColor: 'white',
    padding: 20,
    margin: ms(60),
    borderRadius: ms(16),
  },
  imageContain: {
    alignItems: 'center',
    justifyContent: 'center',
    width: ms(120),
    aspectRatio: 1,
  },
});

export default styles;
