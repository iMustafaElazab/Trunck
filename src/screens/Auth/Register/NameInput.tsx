import {TextInput} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import styles from './styles';

export default React.memo(({control, formErrors}) => {
  const {t: translate} = useTranslation();
  return (
    <Controller
      name="name"
      control={control}
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
          errorProps={{errorMessage: formErrors.name?.message}}
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
