import {StyleSheet} from 'react-native';
import {vs, s} from 'react-native-size-matters';

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
  },
  emptyList: {
    height: '100%',
  },
  notificationItem: {
    width: '90%',
    marginHorizontal: '5%',
    marginVertical: vs(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationItemContent: {
    flex: 1,
    marginStart: s(8),
  },
  loadingMore: {
    marginVertical: vs(8),
  },
});

export default styles;
