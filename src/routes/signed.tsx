import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import AuthHeader from '../components/AuthHeader';
import Dashboard from '../views/Dashboard';
import Investment from '../views/Investment';
import Assistant from '../views/Assistant';
import ObjectiveDetail from '../views/ObjectiveDetail';
import InvestmentTypeDetail from '../views/InvestmentTypeDetail';
import InvestmentDetail from '../views/InvestmentDetail';

const AuthStack = createStackNavigator();
const SignedRoutes = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                animationEnabled: false,
                header: () => <AuthHeader />,
            }}
            mode="card"
        >
            <AuthStack.Screen name="Dashboard" component={Dashboard} />
            <AuthStack.Screen name="ObjectiveDetail" component={ObjectiveDetail} />
            <AuthStack.Screen name="Investment" component={Investment} />
            <AuthStack.Screen name="InvestmentTypeDetail" component={InvestmentTypeDetail} />
            <AuthStack.Screen name="InvestmentDetail" component={InvestmentDetail} />
            <AuthStack.Screen name="Assistant" component={Assistant} />
        </AuthStack.Navigator>
    )
}

export default SignedRoutes;
