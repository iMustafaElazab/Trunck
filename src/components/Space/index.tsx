import * as React from 'react';
import {View} from 'react-native';

interface SpaceProps {
  direction: DIRECTION;
  space: number;
}

export enum DIRECTION {
  TOP = 'top',
  BOTTOM = 'bottom',
  START = 'start',
  END = 'end',
}

export default React.memo((props: SpaceProps) => {
  const getStyle = () => {
    switch (props.direction) {
      case DIRECTION.TOP:
        return {marginTop: props.space};
      case DIRECTION.BOTTOM:
        return {marginBottom: props.space};
      case DIRECTION.START:
        return {marginLeft: props.space};
      case DIRECTION.END:
        return {marginRight: props.space};
      default:
        return {};
    }
  };
  return <View style={getStyle()} />;
});
