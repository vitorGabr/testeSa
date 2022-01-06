import { SignInData } from "../context/AuthContext"
import { api } from "./api"

export const singIn = async ({ username, password }: SignInData) => {
    const result = await api.post('sign-in', { username, password });
    return result.data;
}

export const singUp = async ({ username, password }: SignInData) => {
    const result = await api.post('sign-up', { username, password });
    return result.data;
}

export const forgotPassword = async (username: string) => {
    const result = await api.get(`/forgot-password/${username}`);
    return result.data as SignInData | null;
}