import styled from 'styled-components/native';
import { backgroundMeBallon, backgroundBotBallon, colorWhite, colorBlack } from '../../assets/variables';

export const BallonMe = styled.View`
    background-color: ${backgroundMeBallon};
    width: 60%;
    align-self: flex-end;
    margin: 8px 0;
    padding: 8px 8px;
    border-radius: 15px;
    max-width: 80%;
`;

export const TextMe = styled.Text`
  color: ${colorWhite};
  font-size: 16px;
`;

export const BallonBot = styled.View`
    background-color: ${backgroundBotBallon};
    align-self: flex-start;
    max-width: 80%;
    margin: 8px 0;
    padding: 8px 8px;
    border-radius: 15px;

`;

export const TextBot = styled.Text`
  color: ${colorBlack};
  font-size: 16px;
`;
