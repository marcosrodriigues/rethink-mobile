import React, { useState } from 'react';
import goals from '../../utils/objectives.json';
import ScrollContainer from '../../components/ScrollContainer';
import Objective from '../../interface/Objective';
import CardObjective from '../../components/CardObjective';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Dashboard: React.FC = ({ navigation }) => {

    const [objectives, setObjectives] = useState<Objective[]>(goals as Objective[])

    const handleClickCardObjective = (objective: Objective) => {
        navigation.navigate(
            'ObjectiveDetail', {
                objective
            }
        )
    }

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