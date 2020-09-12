import React from 'react';

import { Input } from '../../assets/global';
import { backgroundBotBallon } from '../../assets/variables';
import { TextInputProperties } from 'react-native';

interface PropsInput extends TextInputProperties { 
    width?: string
}
const RTInput : React.FC<PropsInput> = ({ width, ...rest }) => {
  return <Input 
            width={width}
            placeholderTextColor={backgroundBotBallon}  
            { ...rest } 
        />
}

export default RTInput;