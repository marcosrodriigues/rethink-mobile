import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import Login from '../views/Login';
import CreateAccount from '../views/CreateAccount';

const Stack = createStackNavigator();
const UnsignedRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
    )
}

export default UnsignedRoutes;