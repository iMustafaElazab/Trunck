import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import type {RootStackScreenProps} from '@src/navigation';
export default React.memo(() => {
  const navigation =
    useNavigation<RootStackScreenProps<'productDetail'>['navigation']>();
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            () => navigation.goBack();
          }}
        />
        <Appbar.Content title="Product Detail" />
      </Appbar.Header>
    </View>
  );
});
