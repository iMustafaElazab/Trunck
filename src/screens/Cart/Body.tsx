import {FlatList} from '@eslam-elmeniawy/react-native-common-components';

import * as React from 'react';
import {View} from 'react-native';
import useGetCartApi from '@src/core/Api/hooks/cart/useGetCartApi';

import type {AddCartResponse} from '@src/core/Api/responses/AddCartResponse';

import Products from '../Home/MyHome/Products';

export default React.memo(() => {
  const getLogMessage = (message: string) =>
    `## Header Product Screen: ${message}`;

  const {data: data} = useGetCartApi();

  const getTopProductsContent = () => (
    <FlatList
      keyExtractor={(item, index) => index.toString()}
      data={data?.data.cart_items}
      renderItem={renderProduct}
      numColumns={2}
      contentContainerStyle={{}}
    />
  );

  const renderProduct = ({item}: {item: AddCartResponse}) => (
    <Products item={item.product} />
  );

  return (
    <View style={{flex: 1, padding: 0, margin: 0}}>
      {getTopProductsContent()}
    </View>
  );
});
