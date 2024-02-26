import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Appbar} from 'react-native-paper';

export default React.memo(() => {
  const {t: translate} = useTranslation();
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content title={translate('register')} />
    </Appbar.Header>
  );
});
