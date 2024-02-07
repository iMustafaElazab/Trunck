import {ScrollView} from '@eslam-elmeniawy/react-native-common-components';
import * as React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {percentWidth} from '@src/utils';
import type {ScrollViewProps} from '@eslam-elmeniawy/react-native-common-components';

export default React.memo((props: ScrollViewProps) => {
  const {bounces, contentContainerStyle, children, ...restProps} = props;
  const {width} = useWindowDimensions();

  return (
    <ScrollView
      bounces={bounces ?? false}
      contentContainerStyle={StyleSheet.compose(
        {
          width: percentWidth(width),
          paddingHorizontal: percentWidth(width, 5),
        },
        contentContainerStyle,
      )}
      {...restProps}>
      {children}
    </ScrollView>
  );
});
