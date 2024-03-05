import {Button} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard, View} from 'react-native';
import Space, {DIRECTION} from '@src/components/Space';
import useGetProfileApi from '@src/core/Api/hooks/profile/useGetProfileApi';
import useUpdateProfileApi from '@src/core/Api/hooks/profile/useUpdateProfileApi';
import EmailInput from '../Auth/Register/EmailInput';
import ImageInput from '../Auth/Register/ImageInput';
import NameInput from '../Auth/Register/NameInput';
import PasswordInput from '../Auth/Register/PasswordInput';
import PhoneInput from '../Auth/Register/PhoneInput';
import styles from './styles';
import type {FormValues} from '../Auth/Register/types';

export default React.memo(() => {
  const getLogMessage = (message: string) => `## Body Screen: ${message}`;
  const {t: translate} = useTranslation();
  const [imageProfile, setImageProfile] = React.useState(null);

  const {data: profile, isSuccess: isGetProfileSucess} = useGetProfileApi();
  const {mutate: callUpdateApi} = useUpdateProfileApi();

  React.useEffect(() => {
    if (isGetProfileSucess) {
      console.info(getLogMessage('profile'), profile);
      setValue('name', profile?.data?.user?.name);
      setValue('phone', profile?.data?.user?.phone);
      setValue('email', profile?.data?.user?.email);
      setImageProfile(profile?.data?.user?.image);
    }
  }, [isGetProfileSucess, profile]);

  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors: formErrors},
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      image: imageProfile,
    },
  });

  // const handleSuccess = React.useCallback(() => {
  //   console.info(getLogMessage('handleSuccess'), user);
  //   if (user) {
  //   } else {
  //   }
  // }, [user]);

  // const handleError = React.useCallback(() => {
  //   console.error(getLogMessage('handleError'), error?.response?.data.errors);

  //   if (error) {
  //   }
  // }, [error]);

  // React.useEffect(() => {
  //   if (isSuccess) {
  //     handleSuccess();
  //   }

  //   if (isError) {
  //     handleError();
  //   }
  // }, [isSuccess, isError, handleSuccess, handleError]);

  const handleImageSelected = uri => {
    setImageProfile(uri);
    // Do something with the selected URI
    console.log('Selected URI:', uri);
  };

  const getInputs = () => (
    <View style={styles.rowCenter}>
      <ImageInput onImageSelected={handleImageSelected} uri={imageProfile} />
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
        text={translate('update')}
        style={styles.button}
        onPress={handleSubmit(onSubmitPress)}
      />
    </>
  );

  const onSubmitPress = async (data: FormValues) => {
    console.log(getLogMessage('data'), data);
    Keyboard.dismiss();
    const body = new FormData();
    body.append('name', data.name);
    body.append('email', data.email);
    body.append('phone', data.phone);
    body.append('lang', 'en');
    body.append('file', {
      uri: imageProfile,
      type: 'image/jpeg',
      name: 'photo',
    });
    console.log(getLogMessage('formData'), body);
    callUpdateApi({body: body});
  };

  return <>{getForm()}</>;
});
