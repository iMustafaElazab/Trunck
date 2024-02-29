import {Text} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';

import {Image, View} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import type {Banner} from '@src/core/Api/responses/HomeResponse';

interface CategoryProps {
  item: Banner;
}

export default React.memo((item: CategoryProps) => (
  <View style={styles.contain}>
    <Image style={styles.image} source={{uri: item.item.image}} />
    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
      {item.item.id}
    </Text>
  </View>
));

const styles = ScaledSheet.create({
  image: {
    width: ms(80),
    aspectRatio: 1,
    borderRadius: ms(40),
  },
  contain: {
    justifyContent: 'center',
    height: ms(160),
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});
