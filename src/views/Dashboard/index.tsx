import React, { useState, useEffect } from 'react';
import goals from '../../utils/objectives.json';
import ScrollContainer from '../../components/ScrollContainer';
import Objective from '../../interface/Objective';
import CardObjective from '../../components/CardObjective';
import service from '../../services/hello/hello';
import { Alert } from 'react-native';

// import { Container } from './styles';

const Dashboard: React.FC = ({ navigation, route }) => {
    const createdInvestment = route.params?.createdInvestment;
    const [objectives, setObjectives] = useState<Objective[]>(goals as Objective[])

    const handleClickCardObjective = (objective: Objective) => {
        navigation.navigate(
            'ObjectiveDetail', {
                objective
            }
        )
    }

    useEffect(() => {
        if (createdInvestment) {
            const { objective } = createdInvestment;

            if (objective.id === 0) {
                setObjectives([
                    ...objectives,
                    objective
                ])
            }
        }
        
    }, [createdInvestment])

    return (
        <ScrollContainer>
            {
            objectives && 
                objectives.map(obj => 
                    <CardObjective 
                        key={obj.id} 
                        objective={obj}  
                        onClickCard={handleClickCardObjective}
                    />
                )
            }
        </ScrollContainer>  
    ) 
}

export default Dashboard;