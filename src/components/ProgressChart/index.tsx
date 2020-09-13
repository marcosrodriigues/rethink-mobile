import React from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { colorGold, colorPrimary } from '../../assets/variables';
import { TextInProgressChart } from './styles';

interface RTProgressChartProps {
    value: number
}
const RTProgressChart: React.FC<RTProgressChartProps> = ({ value }) => {
   return <AnimatedCircularProgress
        size={100}
        prefill={100}
        width={15}
        duration={500}
        backgroundColor={colorGold} 
        rotation={0}
        tintColor={colorPrimary}
        fill={value ? (100 - value) : 100}
        onAnimationComplete={() => {}}
    >
            {
                (fill) => (
                <TextInProgressChart>{fill.toFixed(2)}%</TextInProgressChart>
                )
            }
        </AnimatedCircularProgress>
}

export default RTProgressChart;