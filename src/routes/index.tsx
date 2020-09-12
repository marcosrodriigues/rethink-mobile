import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';
import Forgot from '../views/Forgot';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen name="Forgot" component={Forgot} />
        </Stack.Navigator>
    )
}

export default Routes;
