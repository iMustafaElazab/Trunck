import {use} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {Platform, NativeModules, I18nManager} from 'react-native';
import {default as Config} from 'react-native-config';
import * as RNLocalize from 'react-native-localize';
import RNRestart from 'react-native-restart';
import {getLanguage, setLanguage} from '@src/core';
import {AppLanguages} from '@src/enums';
import ar from '@src/translations/ar.json';
import en from '@src/translations/en.json';

const getLogMessage = (message: string) => `## I18n:: ${message}`;

const resources = {
  ar: {translation: ar},
  en: {translation: en},
};

// Get device language.
const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

const defaultLocale: string =
  deviceLanguage.toLowerCase().indexOf(AppLanguages.ARABIC) > -1
    ? AppLanguages.ARABIC
    : AppLanguages.ENGLISH;

const i18n = use(initReactI18next);

const handleRestart = (locale: string) => {
  if (locale === AppLanguages.ARABIC && !I18nManager.isRTL) {
    setTimeout(() => RNRestart.Restart(), 500);
  }

  if (locale === AppLanguages.ENGLISH && I18nManager.isRTL) {
    setTimeout(() => RNRestart.Restart(), 500);
  }
};

export const setI18nConfig = async () => {
  console.info(getLogMessage('setI18nConfig'));

  await i18n.init({
    debug: Config.ENABLE_LOCAL_LOG === 'true',
    compatibilityJSON: 'v3',
    resources,
    lng: defaultLocale,
    interpolation: {
      escapeValue: false,
    },
  });

  const locales = RNLocalize.getLocales();

  if (Array.isArray(locales)) {
    await i18n.changeLanguage(locales[0].languageTag);
  }

  // Get user language.
  const userLanguage = await getLanguage();

  // Set the locale.
  await updateLanguage(userLanguage);
};

export const updateLanguage = async (language?: AppLanguages | null) => {
  console.info(getLogMessage('updateLanguage'), language);
  const locale = language || defaultLocale;

  // Save user language.
  if (language) {
    await setLanguage(language);
  }

  // Set the locale.
  await i18n.changeLanguage(locale);
  I18nManager.allowRTL(locale === AppLanguages.ARABIC);
  I18nManager.forceRTL(locale === AppLanguages.ARABIC);

  // Restart if needed.
  handleRestart(locale);
};

export const getCurrentLocale = () => i18n.language;

export const translate = i18n.t;
