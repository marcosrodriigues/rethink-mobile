import React from 'react';

import { ButtonSquare } from '../../assets/global';
import  { TouchableOpacityProperties } from 'react-native';

interface PropsButton extends TouchableOpacityProperties {
    bgColor?: string,
    size?: number
}
const RTButtonSquare : React.FC<PropsButton> = ({ bgColor, size, children, ...rest }) => {
  return <ButtonSquare size={size} bgColor={bgColor} { ...rest }>
      {children} 
  </ButtonSquare>
}

export default RTButtonSquare;