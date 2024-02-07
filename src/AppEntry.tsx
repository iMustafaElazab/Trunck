import 'react-native-gesture-handler';
import {default as PushNotificationIOS} from '@react-native-community/push-notification-ios';
import messaging from '@react-native-firebase/messaging';
import * as React from 'react';
import {default as PushNotification} from 'react-native-push-notification';
import {enableScreens} from 'react-native-screens';
import {processNotification} from '@src/utils';

enableScreens();

function getLogMessage(message: string) {
  return `## AppEntry:: ${message}`;
}

// Register background handler for firebase messages.
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.info(getLogMessage('BackgroundMessageHandler'), remoteMessage);
});

// Configuration for local notifications.
PushNotification.configure({
  // (required) Called when a remote is received or opened, or local notification is opened.
  onNotification(notification) {
    console.info(getLogMessage('onNotification'), notification);

    processNotification({
      id: notification.id,
      key: notification.id,
      title: notification.data.title,
      message:
        typeof notification.message === 'string'
          ? notification.message
          : notification.data.body,
    });

    // (required) Called when a remote is received or opened, or local notification is opened.
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
});

function AppEntry({isHeadless}: {isHeadless?: boolean}) {
  if (isHeadless) {
    // App has been launched in the background by iOS, ignore.
    return null;
  }

  const App = React.lazy(() => import('@src/App'));

  return (
    <React.Suspense>
      <App />
    </React.Suspense>
  );
}

export default AppEntry;
