import {FlatList, Text} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {View} from 'react-native';

import {ms} from 'react-native-size-matters';

import useHomeApi from '@src/core/Api/hooks/home/useHomeApi';

import type {
  Category,
  FeaturedProduct,
} from '@src/core/Api/responses/HomeResponse';
import Categories from './Categories';
import Products from './Products';

export default React.memo(() => {
  const {data} = useHomeApi();
  const getLogMessage = (message: string) => `## Body Screen: ${message}`;

  const renderCategories = ({item}: {item: Category}) => (
    <Categories item={item} />
  );

  const renderProduct = ({item}: {item: FeaturedProduct}) => (
    <Products item={item} />
  );

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
      data={data?.data.main_categories}
      renderItem={renderCategories}
      horizontal={true}
      contentContainerStyle={{margin: ms(4)}}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
  const getTopProductsContent = () => (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={data?.data.top_products}
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
