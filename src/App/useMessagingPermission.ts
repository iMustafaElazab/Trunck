import messaging from '@react-native-firebase/messaging';
import * as React from 'react';
import {PermissionsAndroid, Platform} from 'react-native';

export const useMessagingPermission = () => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## App::useMessagingPermission:: ${message}`;
  // #endregion

  const checkAndroidPermissions = React.useCallback(async () => {
    if (Platform.OS === 'android') {
      const androidPermissionStatus = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );

      console.info(
        getLogMessage('androidPermissionStatus'),
        androidPermissionStatus,
      );
    }
  }, []);

  const requestPermission = React.useCallback(async () => {
    const authStatus = await messaging().requestPermission();
    console.info(getLogMessage('authStatus'), authStatus);

    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    console.info(getLogMessage('enabled'), enabled);

    if (!enabled) {
      console.warn(getLogMessage('Notifications Disabled'));
    }
  }, []);

  React.useEffect(() => {
    /**
     * checkMessagingPermission
     *
     * Check if notifications permission is not granted then:
     * - Request notifications permission.
     */
    const checkMessagingPermission = async () => {
      console.info(getLogMessage('checkMessagingPermission'));

      try {
        await checkAndroidPermissions();
        const hasPermission = await messaging().hasPermission();
        console.info(getLogMessage('hasPermission'), hasPermission);

        if (!hasPermission) {
          requestPermission();
        }
      } catch (error) {
        console.error(getLogMessage('checkMessagingPermission Error'), error);
      }
    };

    checkMessagingPermission();
  }, [checkAndroidPermissions, requestPermission]);
};
