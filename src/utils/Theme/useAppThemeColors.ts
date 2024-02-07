import {useColorScheme} from 'react-native';
import useAppThemeColorsDark from './useAppThemeColorsDark';
import useAppThemeColorsLight from './useAppThemeColorsLight';

const useAppThemeColors = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const useThemeColors = isDarkMode
    ? useAppThemeColorsDark
    : useAppThemeColorsLight;

  const appThemeColors = useThemeColors();
  return appThemeColors;
};

export default useAppThemeColors;
