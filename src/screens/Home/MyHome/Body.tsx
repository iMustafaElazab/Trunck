import {FlatList, Text} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {Image, View} from 'react-native';

import {ms} from 'react-native-size-matters';

import useHomeApi from '@src/core/Api/hooks/home/useHomeApi';
import type {Banner, TopProduct} from '@src/core/Api/responses/HomeResponse';

export default React.memo(() => {
  const {data} = useHomeApi();
  const getLogMessage = (message: string) => `## Body Screen: ${message}`;
  React.useEffect(() => {
    console.log(getLogMessage('banners'), data?.data?.banners);
  }, []);
  const renderBanners = ({item}: {item: Banner}) => (
    <View style={{justifyContent: 'center', width: ms(80), aspectRatio: 1}}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/id/513544088/photo/yoga-training-at-park.webp?s=2048x2048&w=is&k=20&c=qwltINQFMZqdTxWfFWRxoA5Bhd0dSHuAQ_0ai2DOCy8=',
        }}
        style={{
          width: ms(60),
          aspectRatio: 1,
          resizeMode: 'contain',
          borderRadius: ms(30),
        }}
      />
      <Text style={{alignSelf: 'center'}}>{item.title_en}</Text>
    </View>
  );
  const renderProduct = ({item}: {item: TopProduct}) => (
    <View style={{justifyContent: 'center', width: ms(80), aspectRatio: 1}}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/id/513544088/photo/yoga-training-at-park.webp?s=2048x2048&w=is&k=20&c=qwltINQFMZqdTxWfFWRxoA5Bhd0dSHuAQ_0ai2DOCy8=',
        }}
        style={{
          width: ms(60),
          aspectRatio: 1,
          resizeMode: 'contain',
          borderRadius: ms(30),
        }}
      />
      <Text style={{alignSelf: 'center'}}>{item.name}</Text>
    </View>
  );
  const getBannersContent = () => (
    <View style={{padding: ms(16)}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data?.data.banners}
        renderItem={renderBanners}
        horizontal={true}
      />
    </View>
  );
  const getTopProductsContent = () => (
    <View style={{padding: ms(16)}}>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={data?.data.top_products}
        renderItem={renderProduct}
        horizontal={true}
      />
    </View>
  );
  return (
    <View>
      {getBannersContent()}
      {<Text>Top Products</Text>}
      {getTopProductsContent()}
    </View>
  );
});
