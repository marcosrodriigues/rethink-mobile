import styled from 'styled-components/native';
import { backgroundBotBallon, colorPrimary, colorGold, colorGreen, colorRed } from '../../assets/variables';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 128px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${backgroundBotBallon};
  margin-top: 8px;
  flex-direction: row;
  padding-bottom: 8px;
`;

export const CardInfo = styled.View`
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
`;

export const CardInfoTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const CardInfoPrice = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${colorPrimary};
`;
export const CardInfoMissing = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const CardInfoMissingPrice = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${colorGold};
`;

export const CardInfoComplete = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colorGreen};
`

export const ExtraInfo = styled.View`
    flex-direction: column;
    align-self: flex-end;
    justify-content: center;
`

export const ExtraInfoText = styled.Text<{balance?: boolean}>`
    flex-direction: column;
    align-self: flex-end;
    text-align: center;
    color: ${p => p.balance ? colorGreen : colorRed };
`
