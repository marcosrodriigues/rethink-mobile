import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { Text } from 'react-native';
import { colorPrimary, headerHeight } from '../assets/variables';

const AuthStack = createStackNavigator();
const SignedRoutes = () => {
    return (
        <AuthStack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                headerStyle: {
                    backgroundColor: colorPrimary,
                    height: headerHeight
                }
            }}
        >
            <AuthStack.Screen name="Dashboard" component={() => <Text>Dashboard</Text>} />
        </AuthStack.Navigator>
    )
}

export default SignedRoutes;