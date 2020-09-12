import React, { useState, useEffect } from 'react';
import { AssistantContainer, InputContainer, MessageContainer } from './style';
import ChatContainer from '../../components/ChatContainer';
import Message from '../../interface/Message';
import BallonMessage from '../../components/BallonMessage';
import RTInput from '../../components/Input';
import RTButtonSquare from '../../components/ButtonSquare';
import { Feather } from '@expo/vector-icons';
import { colorWhite } from '../../assets/variables';
import { botApi } from '../../services/bot';
import { Alert, View } from 'react-native';
import { createWebSocket, onMessage } from '../../services/socket';

const Assistant: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [message, setMessage] = useState("");

    const [conversationId, setConversationId] = useState("");

    const [webSocketUrl, setWebSocketUrl] = useState("");
    const [socket, setSocket] = useState<WebSocket>();

    const handleSendMessageToBot = async () => {
        if (message === "") return;
        
        botApi.post(`/${conversationId}/activities`, {
            locale: "pt-BR",
            type: "message",
            from: {
                id: "Rethink App"
            },
            text: message
        });
        setMessage("");

        if (socket)
            onMessage(socket, msg => setMessages(m => [...m, ...msg]));
    }

    useEffect(() => {
        (async function () {
            if (!conversationId && !webSocketUrl)
                try {
                    const { data } = await botApi.post('', {});
                    setConversationId(data.conversationId);
                    setWebSocketUrl(data.streamUrl)
                    botApi.defaults.headers.Authorization = `Bearer ${data.token}`;
                } catch (error) {
                    Alert.alert("Hey", "Não foi possível conectar com o serviço de atendimento.")
                }
        })()
    }, [])

    useEffect(() => {
        if (webSocketUrl !== "" && !socket) {
            const ws = createWebSocket(webSocketUrl);
            setSocket(ws);
        }
    }, [webSocketUrl]);

    return (
        <AssistantContainer>
            <MessageContainer>
                <ChatContainer>
                    {messages && messages.map(msg => (
                        <BallonMessage key={msg.id + msg.text} message={msg} />
                    ))}    
                </ChatContainer>    
            </MessageContainer>
            <InputContainer>
                <RTInput width="80%" value={message} onChangeText={setMessage} />
                <RTButtonSquare onPress={handleSendMessageToBot} disabled={!conversationId}>
                    <Feather name="send" size={30} color={colorWhite} />
                </RTButtonSquare>
            </InputContainer>
        </AssistantContainer>
    )
}

export default Assistant;