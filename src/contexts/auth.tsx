import React, { createContext, useState, useEffect, useContext } from 'react'
import * as auth from '../services/auth/auth';
import api from '../services/safra';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(email: string, password: string): Promise<void>;
    signOut(): Promise<void>;
    signInWithSafra(user: any): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider : React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);

    useEffect(() => {
        const storageUser = localStorage.getItem("@ReThinkAuth:user");
        const storageToken = localStorage.getItem("@ReThinkAuth:token");

        if (storageUser && storageToken) {
            api.defaults.headers.Authorization = `Bearer ${storageToken}`;
            setUser(JSON.parse(storageUser))
        }
    }, [])

    async function signIn(email: string, password: string) {
        const { data } = await auth.signIn(email, password);
        const { token, user } = data;
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        localStorage.setItem("@ReThinkAuth:user", JSON.stringify(user));
        localStorage.setItem("@ReThinkAuth:token", token);
        setUser(user);
    }

    async function signInWithSafra(fbUser: any) {
        const { data } = await auth.signInWithSafra(fbUser);
        const { token, user } = data;
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
        localStorage.setItem("@VenatuAuth:user", JSON.stringify(user));
        localStorage.setItem("@VenatuAuth:token", token);
        setUser(user);
    }

    async function signOut() {
        try {
            auth.signOut();
        } catch (error) { }
        setUser(null);
        api.defaults.headers.Authorization = '';
        localStorage.removeItem('@ReThinkAuth:user')
        localStorage.removeItem('@ReThinkAuth:token')
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