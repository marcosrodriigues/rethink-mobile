import React from 'react';

import { Container, HeaderContainer } from './styles';
import { ScrollViewProperties, ViewStyle, StyleProp } from 'react-native';
import { TitleInfoScrollContainer } from '../../assets/global';

interface ScrollContainerProps extends ScrollViewProperties {
    title?: string,
    subtitle?: string
}
const ScrollContainer: React.FC<ScrollContainerProps> = ({ children, title, subtitle }) => {

    const contentContainerStyle: StyleProp<ViewStyle> = {
        flexDirection: "column",
        alignItems: "flex-start",
    }

    return <Container contentContainerStyle={contentContainerStyle}>
        {
        (title || subtitle) ? 
            <HeaderContainer>
                    <TitleInfoScrollContainer>{title || ""}</TitleInfoScrollContainer>
                    <TitleInfoScrollContainer>{subtitle || ""}</TitleInfoScrollContainer>
            </HeaderContainer>
        :
            <></>
        }
        {children}
        </Container>
}

export default ScrollContainer;