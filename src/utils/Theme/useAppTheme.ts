import {useColorScheme} from 'react-native';
import {MD3LightTheme, MD3DarkTheme} from 'react-native-paper';
import useAppThemeColors from './useAppThemeColors';
import useAppThemeFonts from './useAppThemeFonts';
import type {MD3Theme} from 'react-native-paper/lib/typescript/types';

const useAppTheme = () => {
  // Define colors.
  const appThemeColors = useAppThemeColors();

  // Define fonts.
  const fonts = useAppThemeFonts();

  // Define theme.
  const isDarkMode = useColorScheme() === 'dark';
  const defaultTheme = isDarkMode ? MD3DarkTheme : MD3LightTheme;

  return {
    ...defaultTheme,
    colors: appThemeColors,
    fonts: fonts,
  } as MD3Theme;
};

export default useAppTheme;
