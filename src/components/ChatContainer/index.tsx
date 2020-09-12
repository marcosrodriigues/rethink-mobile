import React from 'react';

import { Container } from './styles';
import { ScrollViewProperties, ViewStyle, StyleProp } from 'react-native';

interface ChatContainerProps extends ScrollViewProperties {
}
const ChatContainer: React.FC<ChatContainerProps> = ({ children }) => {

    const contentContainerStyle: StyleProp<ViewStyle> = {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    }

    return <Container contentContainerStyle={contentContainerStyle}>
        {children}
        </Container>;
}

export default ChatContainer;