import styled from 'styled-components/native';
import { colorPrimary, colorWhite, colorGold, colorGreen } from '../../assets/variables';
import Constants from 'expo-constants'

const paddin = Constants.statusBarHeight + "px";

export const Container = styled.View`
    background-color: ${colorPrimary};
    height: 100px;
    width: 100%;
    padding: ${paddin} 10px 10px 10px;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
`;

export const ButtonHamburguer = styled.TouchableOpacity`
    opacity: 1;
    height: 75px;
    justify-content: flex-end;
`;

export const DivInfo = styled.View`
    width: 85%;
    padding-left: 8px;
    align-self: flex-end;
    flex-direction: column;
`;

export const Title = styled.Text`
    color: ${colorWhite};
    font-size: 18px;
    font-weight: bold;
`;

export const DivInline = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const TextInfo = styled.Text`
    color: ${colorWhite};
    font-size: 14px;
`;

export const Price = styled.Text`
    color: ${colorWhite};
    font-size: 16px;
    font-weight: bold;
`;

export const MenuOption = styled.View`
    flex-direction: row;
    border-bottom-color: ${colorGold};
    border-bottom-width: 1px;
    padding: 0px 8px;
    width: 90%;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    align-self: center;
`;

export const MenuItem = styled.TouchableOpacity<{ active?: boolean }>`
    border-bottom-color: ${colorGold};
    border-bottom-width: ${p => p.active ? "1px" : "0px" };
    align-items: center;
    justify-content: center;
    flex-direction: column;
    align-self: center;
    height: 100%;
`

export const Text = styled.Text`
    font-weight: bold;
`