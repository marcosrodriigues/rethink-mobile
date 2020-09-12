import React from 'react';
import { Text } from 'react-native';
import Message from '../../interface/Message';
import { BallonMe, TextMe, TextBot, BallonBot } from './styles';


interface BallonMessageProps {
    message: Message;
}
const BallonMessage: React.FC<BallonMessageProps> = ({ message }) => {
  return message.isFromMe ?
            <BallonMe><TextMe>{message.text}</TextMe></BallonMe> :
            <BallonBot><TextBot>{message.text}</TextBot></BallonBot>
}

export default BallonMessage;