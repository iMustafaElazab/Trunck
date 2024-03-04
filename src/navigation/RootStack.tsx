import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import type {RootStackParamList} from '@src/navigation';

// Screens.
import {Splash, Login, Notifications} from '@src/screens';
import ForgetPassword from '@src/screens/Auth/ForgetPassword';
import Register from '@src/screens/Auth/Register';
import Cart from '@src/screens/Cart';
import HomeTabs from '@src/screens/Home/HomeTabs';
import Product from '@src/screens/Product';
import Profile from '@src/screens/Profile';

// Navigators.
// TODO: Add navigators imports here.

// Modals.
// TODO: Add modals imports here.

const stack = createNativeStackNavigator<RootStackParamList>();

export default React.memo(() => (
  <stack.Navigator
    id="RootStack"
    initialRouteName="splash"
    screenOptions={{headerShown: false}}>
    {/* Screens */}
    <stack.Screen name="splash" component={Splash} />
    <stack.Screen name="login" component={Login} />
    <stack.Screen name="register" component={Register} />
    <stack.Screen name="notifications" component={Notifications} />
    <stack.Screen name="forgetـpassword" component={ForgetPassword} />
    <stack.Screen name="homeTabs" component={HomeTabs} />
    <stack.Screen name="productDetail" component={Product} />
    <stack.Screen name="cart" component={Cart} />
    <stack.Screen name="profileـupdate" component={Profile} />

    {/* Navigators */}
    {/* TODO: Add nested navigators here. */}

    {/* Modals */}
    <stack.Group
      screenOptions={{
        presentation: 'transparentModal',
      }}>
      <>{/* TODO: Add modals screens here. */}</>
    </stack.Group>
  </stack.Navigator>
));
