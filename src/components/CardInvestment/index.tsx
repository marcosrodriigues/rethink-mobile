import React from 'react';
import Investment from '../../interface/Investment';

import { Container, CardInvestmentTitle, Subtitle, Value } from './styles';
import { Text } from 'react-native';
import { convertNumberToCurrency } from '../../utils/convertNumberToCurrency';
import { Inline } from '../../assets/global';

interface CardInvestmentProps {
    investment: Investment,
    onClickContainer: (investment: Investment) => void
}

const CardInvestment: React.FC<CardInvestmentProps> = ({
    investment,
    onClickContainer
}) => {

    const onClick = () => {
        onClickContainer(investment);
    }

    return (
        <Container onPress={onClick} activeOpacity={1}>
            <CardInvestmentTitle>{investment.title}</CardInvestmentTitle>

            <Inline>
                <Subtitle>Valor mínimo: <Value>{convertNumberToCurrency(investment.minPrice)}</Value></Subtitle>
                <Subtitle>Vencimento: <Value>{investment.date}</Value></Subtitle>
            </Inline>
        </Container>
    );
}

export default CardInvestment;