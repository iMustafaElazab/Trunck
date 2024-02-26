import {Button} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';

import {Keyboard} from 'react-native';

import useRegisterApi from '@src/core/Api/hooks/auth/useRegisterApi';
import EmailInput from './EmailInput';
import NameInput from './NameInput';
import PasswordConfirmInput from './PasswordConfirmInput';
import PasswordInput from './PasswordInput';
import PhoneInput from './PhoneInput';
import styles from './styles';
import type {FormValues} from './types';

export default React.memo(() => {
  const getLogMessage = (message: string) => `## Register Screen: ${message}`;
  const {t: translate} = useTranslation();

  const {
    control,
    handleSubmit,
    formState: {errors: formErrors},
    getValues,
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      passwordـconfrim: '',
    },
  });

  const {
    mutate: callRegisterApi,
    isSuccess,
    isError,
    data: user,
    error,
  } = useRegisterApi();

  const handleSuccess = React.useCallback(() => {
    console.info(getLogMessage('handleSuccess'), user);

    if (user) {
    } else {
    }
  }, [user]);

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

  const getInputs = () => (
    <>
      <NameInput control={control} formErrors={formErrors} />
      <EmailInput control={control} formErrors={formErrors} />
      <PhoneInput control={control} formErrors={formErrors} />
      <PasswordInput control={control} formErrors={formErrors} />
      <PasswordConfirmInput
        control={control}
        formErrors={formErrors}
        getValues={getValues}
      />
    </>
  );

  const getForm = () => (
    <>
      {getInputs()}
      <Button
        text={translate('register')}
        style={styles.button}
        onPress={handleSubmit(onSubmitPress)}
      />
    </>
  );

  const onSubmitPress = async (data: FormValues) => {
    console.log(getLogMessage('data'), data);
    Keyboard.dismiss();
    callRegisterApi({
      body: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        password_confirmation: data.passwordـconfrim,
        customer_type_id: 5,
      },
    });
  };

  return <>{getForm()}</>;
});
