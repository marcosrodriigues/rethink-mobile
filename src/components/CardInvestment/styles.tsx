import styled from 'styled-components/native';
import { colorGold, colorPrimary, colorBlack } from '../../assets/variables';

export const Container = styled.TouchableOpacity`
    width: 100%;
    border-width: 1px;
    border-color: ${colorGold};
    margin: 8px 0;
    padding: 0 8px;
    border-radius: 5px;
`;

export const CardInvestmentTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colorPrimary};
    margin: 10px 0;
`

export const CardInline = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const Subtitle = styled.Text`
    color: ${colorBlack};
    font-size: 14px;
    font-weight: bold;
    margin: 16px 0;
`

export const Value = styled.Text`
    color: ${colorGold};
    font-size: 14px;
    font-weight: bold;
    margin: 16px 0;
`

