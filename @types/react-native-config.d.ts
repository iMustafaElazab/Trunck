declare module 'react-native-config' {
  export interface NativeConfig {
    ENV_NAME?: string;
    BASE_URL?: string;
    API_URL?: string;
    ENABLE_LOCAL_LOG?: string;
    ENABLE_FIREBASE_LOG?: string;
    USE_FAKE_API?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
