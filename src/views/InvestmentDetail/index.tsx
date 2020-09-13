import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ScrollContainer from '../../components/ScrollContainer';
import Investment from '../../interface/Investment';
import objectivesJson from '../../utils/objectives.json';

import { Container, InvestmentTitle, Value } from './styles';
import { Inline, TextInButton } from '../../assets/global';
import { Subtitle } from '../../components/CardInvestment/styles';
import { convertNumberToCurrency } from '../../utils/convertNumberToCurrency';
import RTInput from '../../components/Input';
import RTCurrencyInput from '../../components/RTCurrencyInput';
import { useAuth } from '../../contexts/auth';
import { InvestmentUser } from '../../interface/InvestmentUser';
import Objective from '../../interface/Objective';
import RTButton from '../../components/Button';
import RTPicker from '../../components/RTPicker';

const InvestmentDetail: React.FC = ({
    navigation,
    route
}) => {
    const { user } = useAuth();
    if (!user) return;

    const investment = route.params.investment as Investment;
    const objectives = objectivesJson;

    const [objective, setObjective] = useState<Objective>();
    const [subObjective, setSubObjective] = useState<Objective>();

    const [formData, setFormData] = useState<InvestmentUser>({
        user,
        investment,
        amount: 0,
        objective: subObjective || objective
    }) 

    useEffect(() => {
        setSubObjective({} as Objective);
    }, [objective])


    return (
        <ScrollContainer>
            <Container>
                <InvestmentTitle>{investment.title}</InvestmentTitle>

                <Inline>
                    <Subtitle>Valor mínimo: <Value>{convertNumberToCurrency(investment.minPrice)}</Value></Subtitle>
                    <Subtitle>Vencimento: <Value>{investment.date}</Value></Subtitle>
                </Inline>

                <Inline>
                    <Subtitle>Quanto deseja investir?</Subtitle>
                    
                    <RTCurrencyInput
                        value={String(formData.amount)}
                        onRawText={amount => setFormData(f => ({ ...f, amount}))}
                    />
                </Inline>

                <Inline>
                    <Subtitle>Esse investimento é para qual meta?</Subtitle>
                    <RTPicker 
                        items={objectives}
                        selectedValue={objective}
                        onValueChange={(value) => setObjective(value)}
                    />
                </Inline>

                <Inline>
                    <Subtitle>Deseja incluir submeta?</Subtitle>
                    <RTPicker 
                        items={objective?.objectives || []}
                        selectedValue={subObjective}
                        onValueChange={(value) => setSubObjective(value)}
                    />
                </Inline>

                <RTButton>
                    <TextInButton>Investir</TextInButton>
                </RTButton>
            </Container>
        </ScrollContainer>
    );
}

export default InvestmentDetail;