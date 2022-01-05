import { createContext, ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export type SignInData = {
    username: string,
    password: string
}

type AuthContextType = {

    singInUser: (data: SignInData) => Promise<void>
    registerUser: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
    children: ReactElement | ReactElement[]
}

export function AuthProvider({ children }: AuthProviderProps) {



    async function singInUser({ }: SignInData) {


    }

    async function registerUser(data: SignInData) {

    }


    async function singOutUser() {

    }

    async function forgotPassword(email: string) {

    }

    return (
        <AuthContext.Provider value={{ user, forgotPassword, setUser, registerUser, isAuthenticated, singInUser, singOutUser }
        }>
            {children}
            < /AuthContext.Provider>
            );
}