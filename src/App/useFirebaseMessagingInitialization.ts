import {useMessagingAutoInitialize} from './useMessagingAutoInitialize';
import {useMessagingPermission} from './useMessagingPermission';
import {useNotificationsChannels} from './useNotificationsChannels';

export const useFirebaseMessagingInitialization = () => {
  useMessagingAutoInitialize();
  useMessagingPermission();
  useNotificationsChannels();
};
