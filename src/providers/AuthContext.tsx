import { User, UserCredential } from "firebase/auth";
import { createContext, ReactText } from "react";

interface ProvidersType {
    name?: string | null,
    userLogin?: (email: string, password: string) => Promise<UserCredential>
    newUserSignUp?: (email: string, password: string) => Promise<UserCredential>
    warningMessage?: (text: string) => ReactText;
    successMessage?: (text: string) => ReactText;
    user?: User | null;
    setUser?: (user: User | null) => void;
    loading?: boolean;
    setLoading?: (loading: boolean) => void;
    userLogout?: () => Promise<void>,
    darkTheme?: boolean,
    setDarkTheme: (darkTheme: boolean) => void

}

export const AuthContext = createContext<ProvidersType>({
    name: '',
    userLogin: undefined,
    newUserSignUp: undefined,
    warningMessage: undefined,
    successMessage: undefined,
    user: null,
    setUser: undefined,
    loading: true,
    setLoading: undefined,
    userLogout: undefined,
    darkTheme: false,
    setDarkTheme: undefined
})