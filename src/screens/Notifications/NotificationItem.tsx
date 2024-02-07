import {Text} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {View} from 'react-native';
import {TouchableRipple, Avatar} from 'react-native-paper';
import {processNotification} from '@src/utils';
import styles from './styles';
import type {NotificationItemProps} from './types';

export default React.memo((props: NotificationItemProps) => {
  // #region Logger
  const getLogMessage = (message: string) =>
    `## Notifications::NotificationItem:: ${message}`;
  // #endregion

  const {item: notification} = props;

  const onNotificationPress = () => {
    console.info(getLogMessage('onNotificationPress'), notification);
    processNotification(notification, true);
  };

  return (
    <TouchableRipple onPress={onNotificationPress}>
      <View style={styles.notificationItem}>
        <Avatar.Icon icon="bell" size={40} />
        <View style={styles.notificationItemContent}>
          <Text variant="titleSmall" numberOfLines={1} ellipsizeMode="tail">
            {notification.title}
          </Text>
          <Text variant="bodySmall" numberOfLines={2} ellipsizeMode="tail">
            {notification.message}
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
});
