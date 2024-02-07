import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {HookFormTextInput} from '@src/components';

export default React.memo(() => {
  const {t: translate} = useTranslation();

  return (
    <HookFormTextInput
      name="username"
      rules={{
        required: {
          value: true,
          message: translate('filed_required', {
            field: translate('username'),
          }),
        },
      }}
      textInputProps={{
        label: translate('username'),
        keyboardType: 'email-address',
      }}
    />
  );
});
