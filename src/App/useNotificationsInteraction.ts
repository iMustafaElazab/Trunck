import messaging from '@react-native-firebase/messaging';
import * as React from 'react';
import type {Notification} from '@src/core';
import {processNotification} from '@src/utils';
import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

export const useNotificationsInteraction = () => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## App::useNotificationsInteraction:: ${message}`;
  // #endregion

  const getNotificationFromMessage = React.useCallback(
    (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      const title =
        remoteMessage.notification?.title ??
        typeof remoteMessage.data?.title === 'object'
          ? undefined
          : remoteMessage.data?.title;

      console.info(getLogMessage('title'), title);

      const body =
        remoteMessage.notification?.body ??
        typeof remoteMessage.data?.body === 'object'
          ? undefined
          : remoteMessage.data?.body;

      console.info(getLogMessage('body'), body);

      const notification: Notification = {
        id: remoteMessage.messageId,
        key: remoteMessage.messageId ?? '',
        title: title,
        message: body,
      };

      return notification;
    },
    [],
  );

  React.useEffect(() => {
    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
      console.info(getLogMessage('onNotificationOpenedApp'), remoteMessage);
      processNotification(getNotificationFromMessage(remoteMessage));
    });

    // Check whether an initial notification is available.
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.info(getLogMessage('getInitialNotification'), remoteMessage);

        if (remoteMessage) {
          processNotification(getNotificationFromMessage(remoteMessage));
        }
      });

    return unsubscribe;
  }, [getNotificationFromMessage]);
};
