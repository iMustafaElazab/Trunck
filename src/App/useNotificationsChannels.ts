import * as React from 'react';
import {default as PushNotification} from 'react-native-push-notification';
import {translate} from '@src/core';
import {defaultChannelId, localChannelId} from '@src/utils';

export const useNotificationsChannels = () => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## App::useNotificationsChannels:: ${message}`;
  // #endregion

  React.useEffect(() => {
    /**
     * createNotificationsChannel
     *
     * Call "createChannel" from "PushNotification"
     * to handle creating the notifications channel.
     *
     * @param channelId The notifications channel Id to be created.
     */
    const createNotificationsChannel = (channelId: string) => {
      console.info(getLogMessage('createNotificationsChannel'), channelId);

      PushNotification.createChannel(
        {
          channelId: channelId,
          channelName: translate('app_name'),
          soundName: 'default',
        },
        created => console.info(getLogMessage('created'), channelId, created),
      );
    };

    /**
     * createNotificationsChannels
     *
     * Create default and local notifications channels
     * for delivering notifications through on Android 8+.
     */
    const createNotificationsChannels = () => {
      console.info(getLogMessage('createNotificationsChannels'));
      createNotificationsChannel(defaultChannelId);
      createNotificationsChannel(localChannelId);
    };

    createNotificationsChannels();
  }, []);
};
