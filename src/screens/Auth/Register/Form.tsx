import {Button} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard, View} from 'react-native';
import Space, {DIRECTION} from '@src/components/Space';
import useRegisterApi from '@src/core/Api/hooks/auth/useRegisterApi';
import EmailInput from './EmailInput';
import ImageInput from './ImageInput';
import NameInput from './NameInput';
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
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      image: '',
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

  const handleImageSelected = uri => {
    // Do something with the selected URI
    console.log('Selected URI:', uri);
  };

  const getInputs = () => (
    <View style={styles.rowCenter}>
      <ImageInput onImageSelected={handleImageSelected} uri={null} />
      <Space direction={DIRECTION.TOP} space={16} />
      <NameInput controller={control} formErrors={formErrors} />
      <Space direction={DIRECTION.TOP} space={16} />
      <EmailInput controller={control} formErrors={formErrors} />
      <Space direction={DIRECTION.TOP} space={16} />
      <PhoneInput controller={control} formErrors={formErrors} />
      <Space direction={DIRECTION.TOP} space={16} />
      <PasswordInput controller={control} formErrors={formErrors} />
    </View>
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
    //const formData = new FormData();
    callRegisterApi({
      body: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        image: '',
      },
    });
  };

  return <>{getForm()}</>;
});
