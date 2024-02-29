import {
  IconButton,
  Text,
} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {ms} from 'react-native-size-matters';

import useProductApi from '@src/core/Api/hooks/home/useProductApi';
import type {RootStackScreenProps} from '@src/navigation';
import {NavigationParamsKeys} from '@src/navigation';
import styles from './styles';

export default React.memo((props: RootStackScreenProps<'productDetail'>) => {
  const getLogMessage = (message: string) => `## Body Screen: ${message}`;
  const {route} = props;
  const productId = route.params?.[NavigationParamsKeys.PRODUCT_ID];
  const {data: product, isSuccess} = useProductApi({pathVar: productId});

  console.info(getLogMessage('data'), product?.data.id);
  return (
    <View style={{flex: 1}}>
      {isSuccess && (
        <View>
          <SliderBox
            images={product?.data.images}
            sliderBoxHeight={200}
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={4}
            resizeMethod={'resize'}
            resizeMode={'contain'}
            paginationBoxStyle={styles.paginationBoxStyle}
            dotStyle={styles.dotStyle}
            ImageComponentStyle={styles.imageComponentStyle}
            imageLoadingColor="#2196F3"
          />
          <IconButton
            iconName={product.data.in_favorites ? 'heart' : 'heart-outline'}
            size={48}
            style={{position: 'absolute', top: 0, alignSelf: 'flex-end'}}
          />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={StyleSheet.compose(styles.titleText, {
              marginTop: ms(16),
            })}>
            {product.data.name}
          </Text>
          <Text
            numberOfLines={3}
            ellipsizeMode="tail"
            style={StyleSheet.compose(styles.titleText, {
              fontSize: 14,
              fontWeight: '400',
              letterSpacing: 0,
            })}>
            {product.data.description}
          </Text>
          {/* {showMoreButton && (
            <TouchableOpacity
              onPress={() => setShowText(showText => !showText)}
              accessibilityRole="button">
              <Text>{showText ? 'Read Less' : 'Read More'}</Text>
            </TouchableOpacity>
          )} */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.titleText}>
              {product.data.price}
            </Text>
            {product.data.price !== product.data.old_price && (
              <Text style={{textDecorationLine: 'line-through'}}>
                {product.data.old_price}
              </Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
});
