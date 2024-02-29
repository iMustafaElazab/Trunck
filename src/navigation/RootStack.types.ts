import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  splash: undefined;
  login: undefined;
  notifications: undefined;
  register: undefined;
  forgetـpassword: undefined;
  homeTabs: undefined;
  productDetail: undefined;
  cart: undefined;
};

type MainTabsParamList = {
  home: undefined;
  store: undefined;
  auntions: undefined;
  category: undefined;
  menu: undefined;
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

type MainTabsScreenProps<T extends keyof MainTabsParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabsParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type {RootStackParamList, RootStackScreenProps};
export type {MainTabsParamList, MainTabsScreenProps};
