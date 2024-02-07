import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar} from 'react-native-paper';
import type {RootStackScreenProps} from '@src/navigation';
import {removeUserDataLogout} from '@src/utils';

export default React.memo(() => {
  // #region Logger
  const getLogMessage = (message: string) => `## Home::Header:: ${message}`;
  // #endregion

  const {t: translate} = useTranslation();

  const navigation =
    useNavigation<RootStackScreenProps<'home'>['navigation']>();

  const onNotificationsPress = () => {
    console.info(getLogMessage('onNotificationsPress'));
    navigation.push('notifications');
  };

  const onLogoutPress = () => {
    console.info(getLogMessage('onLogoutPress'));
    removeUserDataLogout();
  };

  return (
    <Appbar.Header statusBarHeight={0} mode="center-aligned">
      <Appbar.Action icon="bell" onPress={onNotificationsPress} />
      <Appbar.Content title={translate('home')} />
      <Appbar.Action icon="logout" onPress={onLogoutPress} />
    </Appbar.Header>
  );
});
