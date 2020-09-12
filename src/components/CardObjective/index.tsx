import React from 'react';
import Objective from '../../interface/Objective';

import { Container, CardInfo, HistoryInfo, CardInfoTitle, CardInfoPrice, CardInfoMissing, CardInfoMissingPrice } from './styles';

import { convertNumberToCurrency } from '../../utils/convertNumberToCurrency';
import RTProgressChart from '../ProgressChart';

interface CardObjectiveProps {
    objective: Objective
}
const CardObjective: React.FC<CardObjectiveProps> = ({ objective }) => {

    const percent = ((objective.missing / objective.goal) * 100);

    return (
        <Container>
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