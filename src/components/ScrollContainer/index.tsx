import React from 'react';

import { Container } from './styles';
import { ScrollViewProperties, ViewStyle, StyleProp } from 'react-native';

interface ScrollContainerProps extends ScrollViewProperties {

}
const ScrollContainer: React.FC<ScrollContainerProps> = ({ children }) => {

    const contentContainerStyle: StyleProp<ViewStyle> = {
        flexDirection: "column",
        alignItems: "flex-start",
    }

    return <Container contentContainerStyle={contentContainerStyle}>
        {children}
        </Container>;
}

export default ScrollContainer;