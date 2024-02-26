import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';
import {Avatar, Searchbar, Text} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import type {RootStackScreenProps} from '@src/navigation';

import styles from './styles';

export default React.memo(() => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const ref = React.useRef(null);
  // #region Logger
  const getLogMessage = (message: string) => `## Home::Header:: ${message}`;
  // #endregion

  const {} = useTranslation();

  const navigation =
    useNavigation<RootStackScreenProps<'home'>['navigation']>();

  return (
    <View style={StyleSheet.compose(styles.borderheader, {height: ms(180)})}>
      <View
        style={{
          marginHorizontal: ms(8),
          height: ms(140),
        }}>
        <View
          style={StyleSheet.compose(styles.row, {
            justifyContent: 'space-between',
          })}>
          <View style={styles.row}>
            <Avatar.Icon icon="home" size={36} />
            <Text
              style={StyleSheet.compose(styles.textHeader, {
                marginStart: ms(8),
              })}>
              Room Finder
            </Text>
          </View>
          <Avatar.Icon icon="menu" size={36} />
        </View>
        <Text
          style={StyleSheet.compose(styles.textHeader, {marginTop: ms(16)})}>
          Hello Guest,
        </Text>
        <Text style={StyleSheet.compose(styles.textHeader, {marginTop: ms(4)})}>
          Find Rooms and Roomates
        </Text>
        <Searchbar
          placeholder="Search by city"
          placeholderTextColor="#E0E0E0"
          onChangeText={setSearchQuery}
          value={searchQuery}
          iconColor="grey"
          ref={ref}
          style={styles.searchBar}
        />
      </View>
    </View>
  );
});
