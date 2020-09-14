import React, { useState, useEffect } from 'react';
import ScrollContainer from '../../components/ScrollContainer';
import Investment from '../../interface/Investment';
import objectivesJson from '../../utils/objectives.json';

import { Container, InvestmentTitle, Value } from './styles';
import { Inline, TextInButton } from '../../assets/global';
import { Subtitle } from '../../components/CardInvestment/styles';
import { convertNumberToCurrency } from '../../utils/convertNumberToCurrency';
import RTCurrencyInput from '../../components/RTCurrencyInput';
import { useAuth } from '../../contexts/auth';
import { InvestmentUser } from '../../interface/InvestmentUser';
import Objective from '../../interface/Objective';
import RTButton from '../../components/Button';
import RTPicker from '../../components/RTPicker';
import { Alert } from 'react-native';
import RTInput from '../../components/Input';
import service from '../../services/investmentUser';

const InvestmentDetail: React.FC = ({
    navigation,
    route
}) => {
    const { user } = useAuth();
    if (!user) return;

    const investment = route.params.investment as Investment;
    const [objectives, setObjectives] = useState<Objective[]>(objectivesJson as Objective[]);

    const [objective, setObjective] = useState<Objective>({} as Objective);
    const [subObjective, setSubObjective] = useState<Objective>();

    const [formData, setFormData] = useState<InvestmentUser>({
        user,
        investment,
        amount: 0,
        objective: undefined
    }) 

    useEffect(() => {
        setSubObjective({} as Objective);
    }, [objective])

    useEffect(() => {
        const obj = {
            id: 0,
            title: "Nova Meta",
            goal: 1000,
            missing: (1000 - formData.amount),
            lastHistory: 5.25,
        }

        const objectives: any[] = [
            ...objectivesJson,
            obj    
        ]
        setObjectives(objectives)
    }, [])

    const handleClickInvest = async () => {
        try {
            //await service.createInvestment(formData);

            const savedObjective = subObjective?.id ? {
                ...subObjective,
                missing: subObjective?.goal - formData.amount
            } : {
                ...objective,
                missing: objective.goal - formData.amount
            }

            Alert.alert("Parabéns!", "Você acaba de investir " + convertNumberToCurrency(formData.amount) + " no investimento " + investment.title)
            const createdInvestment = {
                ...formData,
                objective: savedObjective
            }
            navigation.navigate('Dashboard', {
                createdInvestment
            });
        } catch (error) {
            console.log("ERROR: ", error)
            Alert.alert("Erro!", "Problema de conexão");
        }
    }

    const handlePickerValueChange = (value: Objective) => {
        setObjective(value)
    }

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
                        onValueChange={handlePickerValueChange}
                    />
                </Inline>

                {
                    objective.id === 0 && 
                        <Inline>
                            <Subtitle>Novo objetivo</Subtitle>
                            <RTInput 
                                placeholder="Qual a meta?"
                                value={objective.title}
                                onChangeText={title => setObjective(obj => ({ ...obj, title }))}
                                />
                        </Inline>
                    }
                <Inline>
                    <Subtitle>Deseja incluir submeta?</Subtitle>
                    <RTPicker 
                        items={objective?.objectives || []}
                        selectedValue={subObjective}
                        onValueChange={(value) => setSubObjective(value)}
                    />
                </Inline>

                <RTButton onPress={handleClickInvest}>
                    <TextInButton>Investir</TextInButton>
                </RTButton>
            </Container>
        </ScrollContainer>
    );
}

export default InvestmentDetail;