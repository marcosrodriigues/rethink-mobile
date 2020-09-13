import styled from 'styled-components/native';
import { colorGold, colorPrimary, colorBlack } from '../../assets/variables';

export const Container = styled.View`
  width: 100%;
  border: 1px;
  border-color: ${colorGold};
  padding: 8px;
  align-items: center;
`;

export const InvestmentTitle = styled.Text`
    font-size: 20px;
    color: ${colorPrimary};
    font-weight: bold;
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
