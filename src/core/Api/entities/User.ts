import type {BaseUser} from '@src/core';

interface User extends BaseUser {
  unreadNotificationsCount?: number;
  apiToken?: string;
  fcmToken?: string;
}

export default User;
