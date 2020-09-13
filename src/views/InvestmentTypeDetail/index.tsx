import React from 'react';
import ScrollContainer from '../../components/ScrollContainer';
import Investment from '../../interface/Investment';
import { InvestmentType } from '../../interface/InvestmentType';
import CardInvestment from '../../components/CardInvestment';


const InvestmentTypeDetail: React.FC = ({ route, navigation }) => {
    const investment = route.params.investmentType as InvestmentType;  
    const { availableInvestments } = investment;

    const handleClickInvestment = (investment: Investment) => {
        navigation.navigate("InvestmentDetail", {
            investment
        })
    }

    return (
        <ScrollContainer title={investment.title} >
            {
                availableInvestments &&
                    availableInvestments.map(invest => (
                        <CardInvestment 
                            key={invest.id}
                            investment={invest}
                            onClickContainer={handleClickInvestment}
                        />
                    ))
            }
        </ScrollContainer>
    )
}

export default InvestmentTypeDetail;