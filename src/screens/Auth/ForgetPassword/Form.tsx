import {
  Button,
  Text,
  TextInput,
} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {View} from 'react-native';
import useForgetPasswordApi from '@src/core/Api/hooks/auth/useForegtPasswordApi';
import {isValidEmail} from '@src/utils/validation';
import styles from './styles';

export default React.memo(() => {
  const getLogMessage = (message: string) =>
    `## Forget Password Screen: ${message}`;
  const {t: translate} = useTranslation();

  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

  const onChangeEmailText: (txt: string) => void = (txt: string) => {
    console.log(getLogMessage('onChangeEmailText'));
    setEmail(txt);
    setEmailError('');
  };

  const {
    mutate: callForgetApi,
    isSuccess,
    isError,
    data: data,
    error,
  } = useForgetPasswordApi();

  const handleSuccess = React.useCallback(() => {
    console.info(getLogMessage('handleSuccess'), data);

    if (data) {
    } else {
    }
  }, [data]);

  const handleError = React.useCallback(() => {
    console.error(getLogMessage('handleError'), error?.response?.data.errors);

    if (error) {
    }
  }, [error]);

  React.useEffect(() => {
    if (isSuccess) {
      handleSuccess();
    }

    if (isError) {
      handleError();
    }
  }, [isSuccess, isError, handleSuccess, handleError]);
  const onSendPress: () => void = () => {
    console.log(getLogMessage('onSendPress'));
    if (!isValidEmail(email)) {
      setEmailError(translate('email-valid-error'));
      return;
    }
    callForgetApi({body: {email: email}});
    // setIsSubmitting(true);

    // navigation.navigate('VerifyCode', {email: email});
  };

  const getInputs = () => (
    <View>
      <TextInput
        style={styles.input}
        placeholder={translate('email-address')}
        keyboardType="email-address"
        underlineColor="transparent"
        underlineColorAndroid={'transparent'}
        activeUnderlineColor="transparent"
        value={email}
        onChangeText={onChangeEmailText}
        returnKeyType="next"
      />
      <Text style={{color: 'red'}}>{emailError}</Text>
    </View>
  );

  const getForm = () => (
    <>
      {getInputs()}
      <Button
        text={translate('register')}
        style={styles.button}
        onPress={onSendPress}
      />
    </>
  );

  return <>{getForm()}</>;
});
