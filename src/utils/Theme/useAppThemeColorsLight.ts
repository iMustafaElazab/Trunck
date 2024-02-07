import {MD3LightTheme} from 'react-native-paper';
import {AppColors} from '@src/enums';
import type {MD3Colors} from 'react-native-paper/lib/typescript/types';

const useAppThemeColorsLight = () =>
  ({
    ...MD3LightTheme.colors,
    primary: AppColors.THEME_LIGHT_PRIMARY,
    onPrimary: AppColors.THEME_LIGHT_ON_PRIMARY,
    primaryContainer: AppColors.THEME_LIGHT_PRIMARY_CONTAINER,
    onPrimaryContainer: AppColors.THEME_LIGHT_ON_PRIMARY_CONTAINER,
    secondary: AppColors.THEME_LIGHT_SECONDARY,
    onSecondary: AppColors.THEME_LIGHT_ON_SECONDARY,
    secondaryContainer: AppColors.THEME_LIGHT_SECONDARY_CONTAINER,
    onSecondaryContainer: AppColors.THEME_LIGHT_ON_SECONDARY_CONTAINER,
    tertiary: AppColors.THEME_LIGHT_TERTIARY,
    onTertiary: AppColors.THEME_LIGHT_ON_TERTIARY,
    tertiaryContainer: AppColors.THEME_LIGHT_TERTIARY_CONTAINER,
    onTertiaryContainer: AppColors.THEME_LIGHT_ON_TERTIARY_CONTAINER,
    error: AppColors.THEME_LIGHT_ERROR,
    onError: AppColors.THEME_LIGHT_ON_ERROR,
    errorContainer: AppColors.THEME_LIGHT_ERROR_CONTAINER,
    onErrorContainer: AppColors.THEME_LIGHT_ON_ERROR_CONTAINER,
    background: AppColors.THEME_LIGHT_BACKGROUND,
    onBackground: AppColors.THEME_LIGHT_ON_BACKGROUND,
    surface: AppColors.THEME_LIGHT_SURFACE,
    onSurface: AppColors.THEME_LIGHT_ON_SURFACE,
    surfaceVariant: AppColors.THEME_LIGHT_SURFACE_VARIANT,
    onSurfaceVariant: AppColors.THEME_LIGHT_ON_SURFACE_VARIANT,
    outline: AppColors.THEME_LIGHT_OUTLINE,
    outlineVariant: AppColors.THEME_LIGHT_OUTLINE_VARIANT,
    shadow: AppColors.THEME_LIGHT_SHADOW,
    scrim: AppColors.THEME_LIGHT_SCRIM,
    inverseSurface: AppColors.THEME_LIGHT_INVERSE_SURFACE,
    inverseOnSurface: AppColors.THEME_LIGHT_INVERSE_ON_SURFACE,
    inversePrimary: AppColors.THEME_LIGHT_INVERSE_PRIMARY,
    elevation: {
      ...MD3LightTheme.colors.elevation,
      level0: AppColors.THEME_LIGHT_ELEVATION_LEVEL_0,
      // Note: Color values with transparency cause RN to transfer shadows to children nodes
      // instead of View component in Surface. Providing solid background fixes the issue.
      level1: AppColors.THEME_LIGHT_ELEVATION_LEVEL_1,
      level2: AppColors.THEME_LIGHT_ELEVATION_LEVEL_2,
      level3: AppColors.THEME_LIGHT_ELEVATION_LEVEL_3,
      level4: AppColors.THEME_LIGHT_ELEVATION_LEVEL_4,
      level5: AppColors.THEME_LIGHT_ELEVATION_LEVEL_5,
    },
    surfaceDisabled: AppColors.THEME_LIGHT_SURFACE_DISABLED,
    onSurfaceDisabled: AppColors.THEME_LIGHT_ON_SURFACE_DISABLED,
    backdrop: AppColors.THEME_LIGHT_BACKDROP,
  }) as MD3Colors;

export default useAppThemeColorsLight;
