import React from 'react';
import Objective from '../../interface/Objective';
import ScrollContainer from '../../components/ScrollContainer';
import RTProgressBar from '../../components/RTProgressBar';
import CardObjective from '../../components/CardObjective';
import { convertNumberToCurrency } from '../../utils/convertNumberToCurrency';


const ObjectiveDetail: React.FC = ({ route }) => {
    const objective = route.params.objective as Objective;  
    const { objectives } = objective;
    const progress = (1 - objective.missing / objective.goal);

    const subtitle = `Meta: ${convertNumberToCurrency(objective.goal)}`;

      return (
        <ScrollContainer title={objective.title} subtitle={subtitle} >
            <RTProgressBar progress={progress} />
            {
                objectives &&
                    objectives.map(obj => (
                        <CardObjective 
                            key={obj.id}
                            hideChart={true}
                            objective={obj}
                            onClickCard={() => {}}
                        />
                    ))
            }
        </ScrollContainer>
    )
}

export default ObjectiveDetail;