import React, { useState } from 'react';
import { Text } from 'react-native';
import ScrollContainer from '../../components/ScrollContainer';
import Objective from '../../interface/Objective';
import CardObjective from '../../components/CardObjective';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Dashboard: React.FC = () => {

    const [objectives, setObjectives] = useState<Objective[]>([
        { id: 1, title: "Viagem pra disney", goal: 10000.99, missing: 2000, lastHistory: 500 },
        { id: 2, title: "Faculdade do filho", goal: 64000.99, missing: 5000, lastHistory: 980 },
        { id: 3, title: "Carro dos sonhos", goal: 100000.00, missing: 60000.00, lastHistory: 2500 },
        { id: 4, title: "Casa dos sonhos", goal: 1000000.00, missing: 100000.00, lastHistory: 10000.59 },
        { id: 5, title: "Casa dos sonhos", goal: 1000000.00, missing: 100000.00, lastHistory: -10000.59 },
    ])

    const navigation = useNavigation();

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