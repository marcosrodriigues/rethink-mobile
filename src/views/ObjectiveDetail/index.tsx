import React from 'react';
import { View } from 'react-native';
import Objective from '../../interface/Objective';


// import { Container } from './styles';

interface ParamsProps {
    objective: Objective,
}

const ObjectiveDetail: React.FC<ParamsProps> = ({ route }) => {
    const { params } = route;
    const { objective } = params;
  return <View />;
}

export default ObjectiveDetail;