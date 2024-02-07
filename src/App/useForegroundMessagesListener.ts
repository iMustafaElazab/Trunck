import messaging from '@react-native-firebase/messaging';
import * as React from 'react';
import {getUser} from '@src/core';
import {useAppDispatch, setUser as setStateUser} from '@src/store';
import {displayLocalNotification} from '@src/utils';

export const useForegroundMessagesListener = () => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## App::useForegroundMessagesListener:: ${message}`;
  // #endregion

  // #region Redux
  const dispatch = useAppDispatch();
  // #endregion

  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.info(getLogMessage('onMessage'), remoteMessage);
      const user = await getUser();

      if (user) {
        console.info(getLogMessage('User Available'));

        // Increase notifications count.
        const userWithNewNotificationsCount = {...user};

        userWithNewNotificationsCount.unreadNotificationsCount =
          (user.unreadNotificationsCount || 0) + 1;

        console.info(
          getLogMessage('userWithNewNotificationsCount'),
          userWithNewNotificationsCount,
        );

        dispatch(setStateUser(userWithNewNotificationsCount));

        // Show local notification.
        displayLocalNotification(remoteMessage);
      }
    });

    return unsubscribe;
  }, [dispatch]);
};
