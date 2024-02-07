import {MD3DarkTheme} from 'react-native-paper';
import {AppColors} from '@src/enums';
import type {MD3Colors} from 'react-native-paper/lib/typescript/types';

const useAppThemeColorsDark = () =>
  ({
    ...MD3DarkTheme.colors,
    primary: AppColors.THEME_DARK_PRIMARY,
    onPrimary: AppColors.THEME_DARK_ON_PRIMARY,
    primaryContainer: AppColors.THEME_DARK_PRIMARY_CONTAINER,
    onPrimaryContainer: AppColors.THEME_DARK_ON_PRIMARY_CONTAINER,
    secondary: AppColors.THEME_DARK_SECONDARY,
    onSecondary: AppColors.THEME_DARK_ON_SECONDARY,
    secondaryContainer: AppColors.THEME_DARK_SECONDARY_CONTAINER,
    onSecondaryContainer: AppColors.THEME_DARK_ON_SECONDARY_CONTAINER,
    tertiary: AppColors.THEME_DARK_TERTIARY,
    onTertiary: AppColors.THEME_DARK_ON_TERTIARY,
    tertiaryContainer: AppColors.THEME_DARK_TERTIARY_CONTAINER,
    onTertiaryContainer: AppColors.THEME_DARK_ON_TERTIARY_CONTAINER,
    error: AppColors.THEME_DARK_ERROR,
    onError: AppColors.THEME_DARK_ON_ERROR,
    errorContainer: AppColors.THEME_DARK_ERROR_CONTAINER,
    onErrorContainer: AppColors.THEME_DARK_ON_ERROR_CONTAINER,
    background: AppColors.THEME_DARK_BACKGROUND,
    onBackground: AppColors.THEME_DARK_ON_BACKGROUND,
    surface: AppColors.THEME_DARK_SURFACE,
    onSurface: AppColors.THEME_DARK_ON_SURFACE,
    surfaceVariant: AppColors.THEME_DARK_SURFACE_VARIANT,
    onSurfaceVariant: AppColors.THEME_DARK_ON_SURFACE_VARIANT,
    outline: AppColors.THEME_DARK_OUTLINE,
    outlineVariant: AppColors.THEME_DARK_OUTLINE_VARIANT,
    shadow: AppColors.THEME_DARK_SHADOW,
    scrim: AppColors.THEME_DARK_SCRIM,
    inverseSurface: AppColors.THEME_DARK_INVERSE_SURFACE,
    inverseOnSurface: AppColors.THEME_DARK_INVERSE_ON_SURFACE,
    inversePrimary: AppColors.THEME_DARK_INVERSE_PRIMARY,
    elevation: {
      ...MD3DarkTheme.colors.elevation,
      level0: AppColors.THEME_DARK_ELEVATION_LEVEL_0,
      // Note: Color values with transparency cause RN to transfer shadows to children nodes
      // instead of View component in Surface. Providing solid background fixes the issue.
      level1: AppColors.THEME_DARK_ELEVATION_LEVEL_1,
      level2: AppColors.THEME_DARK_ELEVATION_LEVEL_2,
      level3: AppColors.THEME_DARK_ELEVATION_LEVEL_3,
      level4: AppColors.THEME_DARK_ELEVATION_LEVEL_4,
      level5: AppColors.THEME_DARK_ELEVATION_LEVEL_5,
    },
    surfaceDisabled: AppColors.THEME_DARK_SURFACE_DISABLED,
    onSurfaceDisabled: AppColors.THEME_DARK_ON_SURFACE_DISABLED,
    backdrop: AppColors.THEME_DARK_BACKDROP,
  }) as MD3Colors;

export default useAppThemeColorsDark;
