import {Text, Button} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {hide as rnBootSplashHide} from 'react-native-bootsplash';
import RNRestart from 'react-native-restart';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Screen} from '@src/components';
import {translate} from '@src/core';
import {useAppTheme} from '@src/utils';
import styles from './styles';

export default React.memo(() => {
  const theme = useAppTheme();

  React.useEffect(() => {
    rnBootSplashHide();
  }, []);

  return (
    <SafeAreaProvider>
      <Screen style={styles.container}>
        <Text
          type="bold"
          size={18}
          style={StyleSheet.flatten([
            {color: theme.colors.onBackground},
            styles.text,
            styles.title,
          ])}>
          {translate('error_fallback_title')}
        </Text>
        <Text
          style={StyleSheet.flatten([
            {color: theme.colors.onBackground},
            styles.text,
            styles.message,
          ])}>
          {translate('error_fallback_message')}
        </Text>
        <Button
          text={translate('restart_app')}
          onPress={() => RNRestart.Restart()}
          style={StyleSheet.compose(
            {backgroundColor: theme.colors.primary},
            styles.btn,
          )}
          textProps={{
            style: StyleSheet.compose(
              {color: theme.colors.onPrimary},
              styles.btnTxt,
            ),
          }}
        />
      </Screen>
    </SafeAreaProvider>
  );
});
