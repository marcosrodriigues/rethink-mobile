import React from 'react';

import { Container } from './styles';
import { InvestmentType } from '../../interface/InvestmentType';
import { TextInButton } from '../../assets/global';
import { colorPrimary } from '../../assets/variables';

interface CardInvestmentTypeProps {
    investmentType: InvestmentType,
    onClickContainer: () => void
}
const CardInvestmentType: React.FC<CardInvestmentTypeProps> = ({ 
    investmentType ,
    onClickContainer
}) => {

    return (
        <Container onPress={onClickContainer}>
            <TextInButton color={colorPrimary}>
                {investmentType.title}
            </TextInButton>
        </Container>
    )
}

export default CardInvestmentType;