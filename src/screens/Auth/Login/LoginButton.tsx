import {Button} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useFormContext} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native-paper';
import styles from './styles';
import useLoginButton from './useLoginButton';
import type {FormValues} from './types';

export default React.memo(() => {
  const {t: translate} = useTranslation();
  const {isLoggingIn, onLoginPress} = useLoginButton();

  // #region Form
  const {handleSubmit} = useFormContext<FormValues>();
  // #endregion

  // #region UI
  return isLoggingIn ? (
    <ActivityIndicator style={styles.loadingIndicator} />
  ) : (
    <Button
      text={translate('login')}
      style={styles.btLogin}
      onPress={handleSubmit(onLoginPress)}
    />
  );
  // #endregion
});
