import {Button} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
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
  const {mutate: callAddCart} = useAddCartApi();
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
