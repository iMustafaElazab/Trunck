import * as React from 'react';
import {Screen} from '@src/components';
import Header from './Header';
import NotificationsList from './NotificationsList';

export default React.memo(() => (
  <Screen>
    <Header />
    <NotificationsList />
  </Screen>
));
