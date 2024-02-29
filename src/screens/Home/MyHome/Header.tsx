import {IconButton} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {RootStackScreenProps} from '@src/navigation';
import styles from './styles';

export default React.memo((props: RootStackScreenProps<'homeTabs'>) => {
  const {navigation} = props;
  const textIconStart = (name: string) => (
    <View style={{flexDirection: 'row'}}>
      <Icon name="magnify" size={24} />
      <Text>{name}</Text>
    </View>
  );
  return (
    <View style={styles.rowSpaceBetween}>
      <Icon name="magnify" size={24} style={{}} />
      {textIconStart('Agrii')}
      <IconButton
        iconName="cart-outline"
        size={24}
        style={{}}
        onPress={() => navigation.navigate('cart')}
      />
    </View>
  );
});
