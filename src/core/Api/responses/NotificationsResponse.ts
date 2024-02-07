import type {Notification} from '@src/core';

// TODO: Construct login response based on API.
interface NotificationsResponse {
  data?: Notification[];
  meta?: {currentPage?: number; totalPages?: number};
}

export default NotificationsResponse;
