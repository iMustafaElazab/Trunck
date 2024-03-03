import {Button} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';

import {ToastAndroid} from 'react-native';
import {ms} from 'react-native-size-matters';

import {Screen, ScrollContainer} from '@src/components';
import useAddCartApi from '@src/core/Api/hooks/cart/useCartApi';
import {NavigationParamsKeys, type RootStackScreenProps} from '@src/navigation';
import Body from './Body';
import Header from './Header';
import styles from './styles';

export default React.memo((props: RootStackScreenProps<'productDetail'>) => {
  const getLogMessage = (message: string) =>
    `## Header Product Screen: ${message}`;

  const {navigation, route} = props;
  const productId = route.params?.[NavigationParamsKeys.PRODUCT_ID];

  const {
    mutate: callAddCart,
    isSuccess,
    isError,
    data: addCart,
    error,
  } = useAddCartApi();

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const handleSuccess = React.useCallback(() => {
    if (addCart) {
      showToast(addCart.message);
    }
  }, [addCart]);

  const handleError = React.useCallback(() => {
    console.error(getLogMessage('handleError'), error);

    if (error) {
      showToast(error.message);
    }
  }, [error]);

  React.useEffect(() => {
    if (isSuccess) {
      handleSuccess();
    }

    if (isError) {
      handleError();
    }
  }, [isSuccess, isError, handleSuccess, handleError]);

  return (
    <Screen style={{flex: 1}}>
      <Header />
      <ScrollContainer
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <Body navigation={navigation} route={route} />
        <Button
          text="Add To Cart"
          onPress={() => callAddCart({body: {product_id: productId}})}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            paddingVertical: ms(4),
            borderRadius: ms(4),
            alignSelf: 'center',
            backgroundColor: 'green',
          }}
        />
      </ScrollContainer>
    </Screen>
  );
});
