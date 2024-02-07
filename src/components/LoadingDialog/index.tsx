import {LoadingDialog} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {useAppSelector} from '@src/store';

export default React.memo(() => {
  // #region Redux
  const {showLoadingDialog} = useAppSelector(state => state.dialogs);
  // #endregion

  return <LoadingDialog visible={showLoadingDialog} />;
});
