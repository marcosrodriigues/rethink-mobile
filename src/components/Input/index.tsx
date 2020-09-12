import React from 'react';

import { Input } from '../../assets/global';
import { backgroundBotBallon } from '../../assets/variables';
import { TextInputProperties } from 'react-native';

interface PropsInput extends TextInputProperties { }
const RTInput : React.FC<PropsInput> = ({ ...rest }) => {
  return <Input 
            placeholderTextColor={backgroundBotBallon}  
            { ...rest } 
        />
}

export default RTInput;