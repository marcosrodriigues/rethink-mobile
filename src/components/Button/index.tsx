import React from 'react';

import { Button } from '../../assets/global';
import  { TouchableOpacityProperties } from 'react-native';

interface PropsButton extends TouchableOpacityProperties {
    bgColor?: string,
}
const RTButton : React.FC<PropsButton> = ({ bgColor, children, ...rest }) => {
  return <Button bgColor={bgColor} { ...rest }>
      {children} 
  </Button>
}

export default RTButton;