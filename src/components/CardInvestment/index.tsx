import React from 'react';

import { Container } from './styles';
import { InvestmentType } from '../../interface/InvestmentType';
import { TextInButton } from '../../assets/global';
import { Alert } from 'react-native';
import { colorPrimary } from '../../assets/variables';

interface CardInvestmentProps {
    investmentType: InvestmentType
}
const CardInvestment: React.FC<CardInvestmentProps> = ({ investmentType }) => {

    const handleClickContainer = () => {
        Alert.alert('Ops!', "Clicou em " + investmentType.title);
    }

    return (
        <Container onPress={handleClickContainer}>
            <TextInButton color={colorPrimary}>
                {investmentType.title}
            </TextInButton>
        </Container>
    )
}

export default CardInvestment;