import {AlertDialog} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {useAppDispatch, useAppSelector, removeErrorDialog} from '@src/store';
import {removeUserDataLogout} from '@src/utils';

export default React.memo(() => {
  const {t: translate} = useTranslation();

  // #region Redux
  const dispatch = useAppDispatch();

  const {errorDialogTitle, errorDialogMessage} = useAppSelector(
    state => state.dialogs,
  );
  // #endregion

  const onDismiss = () => {
    // Check if session expired then:
    // - Remove user.
    // - Remove notifications count.
    // - Navigate to login screen.
    if (errorDialogMessage === translate('session_expired')) {
      removeUserDataLogout();
    }

    dispatch(removeErrorDialog());
  };

  return (
    <AlertDialog
      title={errorDialogTitle}
      message={errorDialogMessage}
      dialogProps={{
        visible: Boolean(errorDialogMessage),
        onDismiss: onDismiss,
      }}
      actions={[{action: translate('ok'), actionProps: {onPress: onDismiss}}]}
    />
  );
});
