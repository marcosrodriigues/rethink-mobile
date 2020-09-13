import React, { createContext, useState, useEffect, useContext } from 'react'
import * as auth from '../services/auth/auth';
import { AsyncStorage } from 'react-native';
import User from '../interface/User';
import api from '../services/api';

interface AuthContextData {
    signed: boolean;
    user: User | null;
    signIn(ag: string, cc: string, pass: string): Promise<void>;
    signOut(): Promise<void>;
    signInWithSafra(): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider : React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        (async function () {
            const storageUser = await AsyncStorage.getItem("@ReThinkAuth:user");
            const storageToken = await AsyncStorage.getItem("@ReThinkAuth:token");
    
            if (storageUser && storageToken) {
                api.defaults.headers.Authorization = `Bearer ${storageToken}`;
                setUser(JSON.parse(storageUser))
            }
        })()
    }, [])

    async function signIn(ag: string, cc: string, pass: string) {
        const { data } = await auth.signIn(ag, cc, pass);
        const { token, user } = data;
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        await AsyncStorage.setItem("@ReThinkAuth:user", JSON.stringify(user));
        await AsyncStorage.setItem("@ReThinkAuth:token", token);
        //setUser(user);
    }

    async function signInWithSafra() {
        const { user } = await auth.signInWithSafra();
        await AsyncStorage.setItem("@VenatuAuth:user", JSON.stringify(user));
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
        <AuthContext.Provider value={{ signed: !!user, user: user, signIn, signOut, signInWithSafra }} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
};