import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../contexts/auth';
import SignedRoutes from './signed';
import UnsignedRoutes from './unsigned';

const Stack = createStackNavigator();
const Routes = () => {
    const { signed } = useAuth();
    return signed ? <SignedRoutes /> : <UnsignedRoutes />
}

export default Routes;
