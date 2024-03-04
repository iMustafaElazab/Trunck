import {
  TextInput,
  emailRegExp,
} from '@eslam-elmeniawy/react-native-common-components';
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
      name="email"
      control={props.controller}
      rules={{
        required: {
          value: true,
          message: translate('email-empty-error'),
        },
        pattern: {
          value: emailRegExp,
          message: translate('email-valid-error'),
        },
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          style={styles.input}
          placeholder={translate('email-address')}
          keyboardType="email-address"
          underlineColor="transparent"
          underlineColorAndroid={'transparent'}
          activeUnderlineColor="transparent"
          errorProps={{errorMessage: props.formErrors.email?.message}}
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
