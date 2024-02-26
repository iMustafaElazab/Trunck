import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default React.memo(() => (
  <View style={styles.rowSpaceBetween}>
    <Icon name="magnify" size={24} style={{}} />
    {textIconStart('Agrii')}
    <Icon name="cart-outline" size={24} style={{}} />
  </View>
));

const textIconStart = (name: string) => (
  <View style={{flexDirection: 'row'}}>
    <Icon name="magnify" size={24} />
    <Text>{name}</Text>
  </View>
);
