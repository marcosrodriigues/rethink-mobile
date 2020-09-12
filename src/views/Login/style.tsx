import styled from 'styled-components/native';

import { colorWhite, backgroundMeBallon } from '../../assets/variables';

export const Container = styled.View`
    background-color: ${colorWhite};
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LogoContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 24px 0;
`;

export const Logo = styled.Image`
    width: 100%;
    max-height: 200px;
`;

export const ButtonContainer = styled.View`
    margin: 16px 0;
    justify-content: space-between;
`;

export const Link = styled.Text`
    text-align: center;
    color: ${backgroundMeBallon};
`;