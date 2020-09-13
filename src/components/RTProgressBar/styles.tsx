import styled from 'styled-components/native';
import { colorBlack } from '../../assets/variables';

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const ProgressText = styled.Text`
    text-align: center;
    font-size: 20px;
    color: ${colorBlack};
    width: 80px;

`