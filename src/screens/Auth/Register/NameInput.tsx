import {TextInput} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import styles from './styles';
import type {FormValues} from './types';
import type {Control, FieldErrors} from 'react-hook-form';

interface InputProps {
  controller: Control<FormValues, any, FormValues>;
  formErrors: FieldErrors<FormValues>;
}

export default React.memo((props: InputProps) => {
  const {t: translate} = useTranslation();
  return (
    <Controller
      name="name"
      control={props.controller}
      rules={{
        required: {
          value: true,
          message: translate('name-empty-error'),
        },
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          placeholder={translate('username')}
          underlineColor="transparent"
          underlineColorAndroid={'transparent'}
          activeUnderlineColor="transparent"
          style={styles.input}
          errorProps={{errorMessage: props.formErrors.name?.message}}
          onBlur={onBlur}
          onChange={onChange}
          onChangeText={onChange}
          value={value}
          returnKeyType="next"
        />
      )}
    />
  );
});
