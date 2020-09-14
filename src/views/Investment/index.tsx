import React, { useState, useEffect } from 'react';
import ScrollContainer from '../../components/ScrollContainer';
import { InvestmentType } from '../../interface/InvestmentType';
import CardInvestmentType from '../../components/CardInvestmentType';
import { CardInvestmentContainer } from './styles';
import jsonInvestments from '../../utils/investments.json';
import service from '../../services/investmentType/investmentType';

const Investment: React.FC = ({
    navigation
}) => {
    const [investments, setInvestments] = useState<InvestmentType[]>(jsonInvestments as InvestmentType[]);

    const handleClickContainer = (investmentType: InvestmentType) => {
        navigation.navigate("InvestmentTypeDetail", {
            investmentType
        })
    }

    useEffect(() => {
        (async function() {
            try {
                const data = await service.getAll();
                setInvestments(data);
            } catch (error) {
                console.log("error loading getAll", error)
            }
        })()
    }, [])


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