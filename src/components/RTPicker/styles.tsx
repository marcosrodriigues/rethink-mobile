import styled from 'styled-components/native';
import { colorGold } from '../../assets/variables';

export const Picker = styled.Picker`
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    border-bottom-width: 1px;
    border-bottom-color: ${colorGold};
`;