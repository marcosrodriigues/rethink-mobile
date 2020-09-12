import styled from 'styled-components/native';
import { backgroundMeBallon } from '../../assets/variables';

export const Container = styled.TouchableOpacity`
  width: 48%;
  height: 110px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${backgroundMeBallon};
  margin-top: 8px;
`;
