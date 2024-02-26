import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColors} from '@src/enums';
import Auctions from './Auctions';
import Category from './Category';
import Menu from './Menu';
import MyHome from './MyHome';
import Store from './Store';

const Tab = createBottomTabNavigator();

export default React.memo(() => {
  const {t: translate} = useTranslation();
  const getTabBarIcon = (icon: any) => (
    <>
      <Icon name={icon} size={25} color={AppColors.THEME_DARK_PRIMARY} />
    </>
  );

  return (
    <Tab.Navigator
      id="HomeTabs"
      initialRouteName="HomeTabsMain"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.THEME_LIGHT_ON_PRIMARY,
        tabBarInactiveTintColor: AppColors.THEME_LIGHT_SECONDARY,
        tabBarStyle: {
          backgroundColor: 'white',
        },
        tabBarLabelStyle: {
          fontWeight: Platform.OS === 'ios' ? '500' : undefined,
        },
        unmountOnBlur: true,
      }}>
      <Tab.Screen
        name="HomeTabsMain"
        component={MyHome}
        options={{
          unmountOnBlur: true,

          title: translate('home'),
          tabBarIcon: ({}) => getTabBarIcon('home-variant'),
        }}
      />

      <Tab.Screen
        name="HomeTabsStores"
        component={Store}
        options={{
          unmountOnBlur: true,
          title: translate('stores'),
          tabBarIcon: ({}) => getTabBarIcon('storefront'),
        }}
      />
      <Tab.Screen
        name="HomeTabsAuctions"
        component={Auctions}
        options={{
          unmountOnBlur: true,
          title: translate('auctions'),
          tabBarIcon: ({}) => getTabBarIcon('gavel'),
        }}
      />
      <Tab.Screen
        name="HomeTabsCategories"
        component={Category}
        options={{
          unmountOnBlur: true,
          title: translate('category'),
          tabBarIcon: ({}) => getTabBarIcon('shape-plus'),
        }}
      />
      <Tab.Screen
        name="HomeTabsMenu"
        component={Menu}
        options={{
          unmountOnBlur: true,
          title: translate('menu'),
          tabBarIcon: ({}) => getTabBarIcon('menu'),
        }}
      />
    </Tab.Navigator>
  );
});
