import {TextInput} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Controller, useFormContext, type FieldValues} from 'react-hook-form';
import type {Props} from './types';

function HookFormTextInput<T extends FieldValues>(props: Props<T>) {
  // #region Variables
  const {name, rules, textInputProps} = props;
  const {errorProps, ...restTextInputProps} = textInputProps ?? {};

  const {errorMessage: errorPropsErrorMessage, ...restErrorProps} =
    errorProps ?? {};
  // #endregion

  // #region Form
  const {
    control,
    formState: {errors},
  } = useFormContext<T>();

  const errorMessage = errorPropsErrorMessage
    ? errorPropsErrorMessage
    : errors[name]?.message;
  // #endregion

  // #region UI
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          errorProps={{
            errorMessage:
              errorMessage && typeof errorMessage === 'string'
                ? errorMessage
                : undefined,
            ...restErrorProps,
          }}
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          {...restTextInputProps}
        />
      )}
    />
  );
  // #endregion
}

export default React.memo(HookFormTextInput);
