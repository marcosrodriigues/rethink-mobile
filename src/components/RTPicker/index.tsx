import React from 'react';

import { Picker } from './styles';
import { PickerProperties } from 'react-native';
import { colorPrimary, colorBlack } from '../../assets/variables';

interface RTPicker extends PickerProperties {
    items: any[]
}
const RTPicker: React.FC<RTPicker> = ({
    items,
    ...rest
}) => {
  return (
      <Picker
        {...rest}
      >
          <Picker.Item color={colorBlack} label="Escolha um item" value="" />
          {
            items && items.map(item =>
                <Picker.Item key={item.title} color={colorPrimary} label={item.title} value={item} />
            )
          }
      </Picker>
  );
}

export default RTPicker;