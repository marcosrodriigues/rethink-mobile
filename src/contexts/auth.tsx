import React, { createContext, useState, useEffect, useContext } from 'react'
import * as auth from '../services/auth/auth';
import { AsyncStorage } from 'react-native';
import User from '../interface/User';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(): Promise<void>;
    signOut(): Promise<void>;
    signInWithSafra(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider : React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (async function () {
            const storageUser = await AsyncStorage.getItem("@SafiraAuth:user");
    
            if (storageUser) {
                setUser(JSON.parse(storageUser))
            }
        })()
    }, [])

    async function signIn() {
        await auth.signIn();
    }

    async function signInWithSafra() {
        await signIn();
        const { user } = await auth.signInWithSafra();
        await AsyncStorage.setItem("@SafiraAuth:user", JSON.stringify(user));
        setUser(user);
    }

    async function signOut() {
        try {
            auth.signOut();
        } catch (error) { }
        setUser(null);
        api.defaults.headers.Authorization = '';
        await AsyncStorage.removeItem('@ReThinkAuth:user')
        await AsyncStorage.removeItem('@ReThinkAuth:token')
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user: user, signOut, signIn, signInWithSafra }} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
};