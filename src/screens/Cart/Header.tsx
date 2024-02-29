import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View} from 'react-native';
import {Appbar} from 'react-native-paper';
import type {RootStackScreenProps} from '@src/navigation';

export default React.memo(() => {
  const getLogMessage = (message: string) =>
    `## Header Product Screen: ${message}`;

  const navigation =
    useNavigation<RootStackScreenProps<'cart'>['navigation']>();
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            () => navigation.goBack();
          }}
        />
        <Appbar.Content title="Cart" />
      </Appbar.Header>
    </View>
  );
});
