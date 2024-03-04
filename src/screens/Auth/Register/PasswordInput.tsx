import {TextInput} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';
import {TextInput as PaperInput} from 'react-native-paper';
import {AppColors} from '@src/enums';
import styles from './styles';
import type {FormValues} from './types';
import type {Control, FieldErrors} from 'react-hook-form';

interface InputProps {
  controller: Control<FormValues, any, FormValues>;
  formErrors: FieldErrors<FormValues>;
}

export default React.memo((props: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleIcon = () => {
    setShowPassword(!showPassword);
  };
  const {t: translate} = useTranslation();
  return (
    <Controller
      name="password"
      control={props.controller}
      rules={{
        required: {
          value: true,
          message: translate('password-empty-error'),
        },
        pattern: {
          value: normalPasswordRegExp,
          message: 'error password',
        },
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          style={styles.input}
          placeholder={translate('password')}
          underlineColor="transparent"
          underlineColorAndroid={'transparent'}
          activeUnderlineColor="transparent"
          keyboardType="numbers-and-punctuation"
          errorProps={{errorMessage: props.formErrors.password?.message}}
          onBlur={onBlur}
          onChange={onChange}
          onChangeText={onChange}
          value={value}
          right={
            <TouchableOpacity onPress={handleIcon}>
              <PaperInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                color={AppColors.THEME_LIGHT_ON_PRIMARY}
                size={24}
              />
            </TouchableOpacity>
          }
          secureTextEntry={!showPassword}
          returnKeyType={'done'}
        />
      )}
    />
  );
});

export const normalPasswordRegExp = /^.{8,}$/;
