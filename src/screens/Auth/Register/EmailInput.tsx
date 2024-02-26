import {
  TextInput,
  emailRegExp,
} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';

import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import styles from './styles';

export default React.memo(({control, formErrors}) => {
  const {t: translate} = useTranslation();
  return (
    <Controller
      name="email"
      control={control}
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
          errorProps={{errorMessage: formErrors.email?.message}}
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
