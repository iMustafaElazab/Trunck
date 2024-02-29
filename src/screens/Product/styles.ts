import {StyleSheet} from 'react-native';
import {ms, vs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    marginVertical: vs(4),
  },
  scrollViewContent: {
    flex: 1,
    gap: vs(4),
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
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.7,
  },
  paginationBoxStyle: {
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.92)',
  },
  imageComponentStyle: {
    borderRadius: 15,
    width: '97%',
    marginTop: 5,
  },
});

export default styles;
