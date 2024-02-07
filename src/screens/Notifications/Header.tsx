import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar} from 'react-native-paper';
import type {RootStackScreenProps} from '@src/navigation';

export default React.memo(() => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Notifications::Header:: ${message}`;
  // #endregion

  const {t: translate} = useTranslation();

  const navigation =
    useNavigation<RootStackScreenProps<'notifications'>['navigation']>();

  const onBackPress = () => {
    console.info(getLogMessage('onBackPress'));
    navigation.goBack();
  };

  return (
    <Appbar.Header statusBarHeight={0} mode="center-aligned">
      <Appbar.BackAction onPress={onBackPress} />
      <Appbar.Content title={translate('notifications')} />
    </Appbar.Header>
  );
});
