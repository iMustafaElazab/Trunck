import {Text} from '@eslam-elmeniawy/react-native-common-components';
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Image, Pressable, View} from 'react-native';
import {ScaledSheet, ms} from 'react-native-size-matters';
import type {FeaturedProduct} from '@src/core/Api/responses/HomeResponse';
import {AppColors} from '@src/enums';
import {NavigationParamsKeys, type RootStackScreenProps} from '@src/navigation';

interface ProductsProps {
  item: FeaturedProduct;
}

export default React.memo((item: ProductsProps) => {
  const navigation =
    useNavigation<RootStackScreenProps<'homeTabs'>['navigation']>();

  const getLogMessage = (message: string) =>
    `## Header Product Screen: ${message}`;
  console.info(getLogMessage('productList'), item);

  return (
    <Pressable
      style={styles.contain}
      onPress={() =>
        navigation.navigate('productDetail', {
          [NavigationParamsKeys.PRODUCT_ID]: item.item.id,
        })
      }>
      <View style={styles.contain}>
        <Image
          style={styles.image}
          source={{uri: item.item.image.path}}
          resizeMode="contain"
        />

        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.item.name}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.item.description}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.item.prices[0].price}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {item.item.discount}
        </Text>
      </View>
    </Pressable>
  );
});

const styles = ScaledSheet.create({
  contain: {
    backgroundColor: AppColors.THEME_LIGHT_ON_SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    margin: ms(4),
    borderRadius: ms(4),
  },
  image: {
    height: ms(140),
    width: '100%',
    alignSelf: 'flex-start',
    margin: 0,
  },
});
