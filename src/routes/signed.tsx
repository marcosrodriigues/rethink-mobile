import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { Text } from 'react-native';
import AuthHeader from '../components/AuthHeader';

const AuthStack = createStackNavigator();
const SignedRoutes = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                header: () => <AuthHeader />
            }}
        >
            <AuthStack.Screen name="Dashboard" component={() => <Text>Dashboard</Text>} />
        </AuthStack.Navigator>
    )
}

export default SignedRoutes;