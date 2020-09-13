import React from 'react';

import { Bar } from 'react-native-progress';
import { colorPrimary, colorGold } from '../../assets/variables';
import { Dimensions, View, Text } from 'react-native';

import { Container, ProgressText } from './styles';

interface RTProgressBarProps {
    progress: number;
}

const deviceWidth = Dimensions.get('screen').width - 100;

const RTProgressBar: React.FC<RTProgressBarProps> = ({ progress }) => {
  return <Container>
            <View style={{ width: deviceWidth }}>
                <Bar 
                    color={colorPrimary} 
                    unfilledColor={colorGold} 
                    width={deviceWidth} 
                    progress={progress} 
                    height={45}
                />
            </View>
            <ProgressText>{(progress * 100).toFixed(2)}%</ProgressText>
        </Container>
  
}

export default RTProgressBar;