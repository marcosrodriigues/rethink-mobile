import styled from 'styled-components/native';
import { backgroundBotBallon, backgroundMeBallon, colorWhite, colorPrimary } from './variables';

export const Form = styled.View`
    width: 80%;
    justify-content: space-between;
`;

export const Input = styled.TextInput`
    border: 1px solid ${backgroundBotBallon};
    height: 50px;
    margin: 10px 0px;
    padding: 0px 10px;
    border-radius: 5px;
    font-size: 16px;

    color: ${backgroundMeBallon};
`;

export const Button = styled.TouchableOpacity<{ bgColor?: string }>`
    height: 50px;
    width: 100%;
    color: green;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin: 5px 0;
    border: 1px solid ${backgroundBotBallon};
    background-color: ${p => p.bgColor || colorPrimary};
`;

export const TextInButton = styled.Text<{ color?: string}>`
    font-size: 18px;
    font-weight: bold;
    color: ${p => p.color || colorWhite}; 
`