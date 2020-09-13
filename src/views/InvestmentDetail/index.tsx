import React from 'react';
import { View } from 'react-native';
import ScrollContainer from '../../components/ScrollContainer';
import Investment from '../../interface/Investment';

// import { Container } from './styles';

const InvestmentDetail: React.FC = ({
    navigation,
    route
}) => {
    const investment = route.params.investment;

    return (
        <ScrollContainer title={investment.title}>

        </ScrollContainer>
    );
}

export default InvestmentDetail;