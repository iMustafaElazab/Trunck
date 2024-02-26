import * as React from 'react';
import {Image} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import {AppImages} from '@src/enums';

export default React.memo(() => (
  <Image style={styles.image} source={AppImages.LOGO} />
));

const styles = ScaledSheet.create({
  image: {
    width: ms(60),
    aspectRatio: 1,
    borderRadius: ms(30),
  },
});
