import {TextInput, phoneRegExp} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import styles from './styles';

export default React.memo(({control, formErrors}) => {
  const {t: translate} = useTranslation();
  return (
    <Controller
      name="phone"
      control={control}
      rules={{
        required: {
          value: true,
          message: translate('phone-empty-error'),
        },
        pattern: {
          value: phoneRegExp,
          message: translate('phone-valid-error'),
        },
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          style={styles.input}
          underlineColor="transparent"
          underlineColorAndroid={'transparent'}
          activeUnderlineColor="transparent"
          placeholder={translate('phone')}
          keyboardType="phone-pad"
          errorProps={{errorMessage: formErrors.phone?.message}}
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
