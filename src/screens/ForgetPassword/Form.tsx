import {
  Button,
  TextInput,
} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import styles from './styles';

export default React.memo(() => {
  const getLogMessage = (message: string) => `## Register Screen: ${message}`;
  const {t: translate} = useTranslation();

  const getInputs = () => (
    <TextInput
      style={styles.input}
      placeholder={translate('email-address')}
      keyboardType="email-address"
      underlineColor="transparent"
      underlineColorAndroid={'transparent'}
      activeUnderlineColor="transparent"
      returnKeyType="next"
    />
  );

  const getForm = () => (
    <>
      {getInputs()}
      <Button text={translate('register')} style={styles.button} />
    </>
  );

  return <>{getForm()}</>;
});
