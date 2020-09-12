import React, { useState, useEffect } from 'react';
import { AssistantContainer, InputContainer } from './style';
import ChatContainer from '../../components/ChatContainer';
import Message from '../../interface/Message';
import BallonMessage from '../../components/BallonMessage';
import RTInput from '../../components/Input';
import RTButtonSquare from '../../components/ButtonSquare';
import { Feather } from '@expo/vector-icons';
import { colorWhite } from '../../assets/variables';
import { botApi } from '../../services/bot';
import { Alert } from 'react-native';

const Assistant: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, isFromMe: true, text: "Oi Safira, como vai?" },
        { id: 2, isFromMe: false, text: "Boa tarde, ##NOME##! Estou ótima, e como vai você?" },
        { id: 3, isFromMe: true, text: "Estou bem." },
        { id: 4, isFromMe: true, text: "E qual a previsão do dia de hoje?" },
        { id: 5, isFromMe: false, text: "Hoje vai fazer muito sol!" },
        { id: 6, isFromMe: true, text: "Oi Safira, como vai?" },
        { id: 7, isFromMe: false, text: "Boa tarde, ##NOME##! Estou ótima, e como vai você?" },
        { id: 8, isFromMe: true, text: "Estou bem." },
        { id: 9, isFromMe: true, text: "E qual a previsão do dia de hoje?" },
        { id: 10, isFromMe: false, text: "Hoje vai fazer muito sol!" },
        { id: 11, isFromMe: true, text: "Oi Safira, como vai?" },
        { id: 12, isFromMe: false, text: "Boa tarde, ##NOME##! Estou ótima, e como vai você?" },
        { id: 13, isFromMe: true, text: "Estou bem." },
        { id: 14, isFromMe: true, text: "E qual a previsão do dia de hoje?" },
        { id: 15, isFromMe: false, text: "Hoje vai fazer muito sol!" },
    ]);
    const [message, setMessage] = useState("");

    const [conversationId, setConversationId] = useState("");

    const [webSocketUrl, setWebSocketUrl] = useState("");

    const handleSendMessageToBot = () => {
        if (message !== "") return;
        setMessages([
            ...messages,
            { id: 16, isFromMe: true, text: message }
        ]);
        setMessage("");
    }

    useEffect(() => {
        (async function () {
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
        if (webSocketUrl !== "") {
        }
    }, [webSocketUrl])

    return (
        <AssistantContainer>
            <ChatContainer>
                {messages && messages.map(msg => (
                    <BallonMessage key={msg.id} message={msg} />
                ))}    
            </ChatContainer>    
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