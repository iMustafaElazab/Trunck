import {FlatList, Text} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {View} from 'react-native';

import {ms} from 'react-native-size-matters';

import useHomeApi from '@src/core/Api/hooks/home/useHomeApi';

import type {Banner, Product} from '@src/core/Api/responses/HomeResponse';
import Categories from './Categories';
import Products from './Products';

export default React.memo(() => {
  const {data} = useHomeApi();
  const getLogMessage = (message: string) => `## Body Screen: ${message}`;

  const renderCategories = ({item}: {item: Banner}) => (
    <Categories item={item} />
  );

  const renderProduct = ({item}: {item: Product}) => <Products item={item} />;

  const ItemSeparator = () => (
    <View
      style={{
        height: 1,
        marginHorizontal: ms(8),
      }}
    />
  );

  const getCategoryContent = () => (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={data?.data.banners}
      renderItem={renderCategories}
      horizontal={true}
      contentContainerStyle={{margin: ms(4)}}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
  const getTopProductsContent = () => (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={data?.data.products}
      renderItem={renderProduct}
      numColumns={2}
      contentContainerStyle={{}}
    />
  );
  return (
    <View>
      {getCategoryContent()}
      {<Text>Top Products</Text>}
      {getTopProductsContent()}
    </View>
  );
});
