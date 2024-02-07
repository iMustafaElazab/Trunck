import type {RootStackParamList} from './RootStack.types';

export {default as NavigationContainer} from './NavigationContainer';
export {default as NavigationParamsKeys} from './NavigationParamsKeys';
export * from './NavigationUtils';
export {default as RootStack} from './RootStack';
export * from './RootStack.types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
