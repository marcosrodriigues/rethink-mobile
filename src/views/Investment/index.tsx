import React, { useState } from 'react';
import ScrollContainer from '../../components/ScrollContainer';
import { InvestmentType } from '../../interface/InvestmentType';
import CardInvestmentType from '../../components/CardInvestmentType';
import { CardInvestmentContainer } from './styles';
import jsonInvestments from '../../utils/investments.json';
import { Alert } from 'react-native';

const Investment: React.FC = ({
    navigation
}) => {
    const [investments, setInvestments] = useState<InvestmentType[]>(jsonInvestments as InvestmentType[]);

    const handleClickContainer = (investmentType: InvestmentType) => {
        navigation.navigate("InvestmentTypeDetail", {
            investmentType
        })
    }

  return (
      <ScrollContainer title="Escolha o tipo de investimento">
        <CardInvestmentContainer>
            {
            investments && 
                investments.map(i => 
                    <CardInvestmentType 
                        onClickContainer={() => handleClickContainer(i)}
                        key={i.id} 
                        investmentType={i} 
                    />)
            }
        </CardInvestmentContainer>
      </ScrollContainer>
  )
}

export default Investment;