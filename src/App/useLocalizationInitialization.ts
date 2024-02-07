import * as React from 'react';
import {setI18nConfig} from '@src/core';

export const useLocalizationInitialization = () => {
  // #region State
  const [languageLoaded, setLanguageLoaded] = React.useState<boolean>(false);
  // #endregion

  React.useEffect(() => {
    setI18nConfig().then(() => setLanguageLoaded(true));
  }, []);

  return languageLoaded;
};
