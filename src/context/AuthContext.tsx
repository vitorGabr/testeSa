import { createContext, ReactElement, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";
import { singIn, singUp } from "../service/auth";

export type SignInData = {
    username: string,
    password: string
}

type AuthContextType = {
    singOutUser: () => void,
    singInUser: (data: SignInData) => Promise<void>
    registerUser: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
    children: ReactElement | ReactElement[];
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const navigate = useNavigate();

    async function registerUser(data: SignInData) {
        const result = await singUp(data);
        return result;
    }

    async function singInUser(data: SignInData) {
        const result = await singIn(data);
        setCookie('token', result, { path: '/' });
        api.defaults.headers.common['Authorization'] = `Bearer ${result}`;
        navigate('/');
    }

    async function singOutUser() {
        removeCookie('token');
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{ singOutUser, registerUser, singInUser }
        }>
            {children}
        </AuthContext.Provider>
    )
}