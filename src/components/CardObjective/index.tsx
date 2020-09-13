import React from 'react';
import Objective from '../../interface/Objective';

import { Container, CardInfo, HistoryInfo, CardInfoTitle, CardInfoPrice, CardInfoMissing, CardInfoMissingPrice } from './styles';

import { convertNumberToCurrency } from '../../utils/convertNumberToCurrency';
import RTProgressChart from '../ProgressChart';

interface CardObjectiveProps {
    objective: Objective,
    onClickCard: (objective: Objective) => void
}
const CardObjective: React.FC<CardObjectiveProps> = ({ objective, onClickCard }) => {

    const percent = ((objective.missing / objective.goal) * 100);

    return (
        <Container onPress={() => onClickCard(objective)}>
            <CardInfo>
                <CardInfoTitle>{objective.title}</CardInfoTitle>
                <CardInfoPrice>{convertNumberToCurrency(objective.goal)}</CardInfoPrice>
                <CardInfoMissing>Faltam <CardInfoMissingPrice>{convertNumberToCurrency(objective.missing)}</CardInfoMissingPrice></CardInfoMissing>
            </CardInfo>

            <RTProgressChart value={percent} />

            <HistoryInfo balance={objective.lastHistory >= 0}>{convertNumberToCurrency(objective.lastHistory)}</HistoryInfo>
        </Container>
    )
}

export default CardObjective;