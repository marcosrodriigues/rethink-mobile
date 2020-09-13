import styled from 'styled-components/native';
import { backgroundBotBallon } from '../../assets/variables';

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 110px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${backgroundBotBallon};
  margin-top: 8px;
`;
