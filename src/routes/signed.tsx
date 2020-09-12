import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import AuthHeader from '../components/AuthHeader';
import Dashboard from '../views/Dashboard';
import Investir from '../views/Investir';
import Assistente from '../views/Assistente';
import { Animated, Easing } from 'react-native';

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
            <AuthStack.Screen name="Investir" component={Investir} />
            <AuthStack.Screen name="Assistente" component={Assistente} />
        </AuthStack.Navigator>
    )
}

export default SignedRoutes;
