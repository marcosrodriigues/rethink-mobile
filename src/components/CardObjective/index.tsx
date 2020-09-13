import React from 'react';
import Objective from '../../interface/Objective';

import { Container, CardInfo, CardInfoTitle, CardInfoPrice, CardInfoMissing, CardInfoMissingPrice, CardInfoComplete, ExtraInfoText, ExtraInfo } from './styles';

import { convertNumberToCurrency } from '../../utils/convertNumberToCurrency';
import RTProgressChart from '../ProgressChart';

import completePng from '../../assets/complete.png'
import { Image } from 'react-native';

interface CardObjectiveProps {
    objective: Objective,
    onClickCard: (objective: Objective) => void,
    hideChart?: boolean
}
const CardObjective: React.FC<CardObjectiveProps> = ({ objective, onClickCard, hideChart = false }) => {
    const percent = ((objective.missing / objective.goal) * 100);

    return (
        <Container onPress={() => onClickCard(objective)}>
            <CardInfo>
                <CardInfoTitle>{objective.title}</CardInfoTitle>
                <CardInfoPrice>{convertNumberToCurrency(objective.goal)}</CardInfoPrice>

                {
                    objective.missing === 0 ?
                        <CardInfoComplete>META CONCLUÍDA</CardInfoComplete>
                    :
                        <CardInfoMissing>Faltam <CardInfoMissingPrice>{convertNumberToCurrency(objective.missing)}</CardInfoMissingPrice></CardInfoMissing>
                }
            </CardInfo>

            {
                !hideChart && <RTProgressChart value={percent} />
            }
            


            <ExtraInfo>
                {objective.missing === 0 && <Image source={completePng} height={75} width={75} />}
                <ExtraInfoText balance={objective.lastHistory >= 0}>{convertNumberToCurrency(objective.lastHistory)}</ExtraInfoText>
            </ExtraInfo>
        </Container>
    )
}

export default CardObjective;