import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { Text } from 'react-native';

const AuthStack = createStackNavigator();
const SignedRoutes = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Dashboard"
        >
            <AuthStack.Screen name="Dashboard" component={() => <Text>Dashboard</Text>} />
        </AuthStack.Navigator>
    )
}

export default SignedRoutes;