import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential } from "firebase/auth";
import auth from "../components/firebase/firebase.config";
import { ToastContainer, toast } from 'react-toastify';

interface AuthProviderProps {
    children: ReactNode
}


type Email = string
type Pass = string


const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<User | null>();
    const [loading, setLoading] = useState<boolean>(true)
    const name: string = 'tanim';

    const newUserSignUp = (email: Email, password: Pass): Promise<UserCredential> => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email: Email, password: Pass): Promise<UserCredential> => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const warningMessage = (text: string) => {
        return toast.error(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const successMessage = (text: string) => {
        return toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [setLoading, setUser])

    const allFn = {
        name,
        user,
        setUser,
        loading,
        setLoading,
        userLogin,
        newUserSignUp,
        warningMessage,
        successMessage,
        userLogout
    }
    return (
        <AuthContext.Provider value={allFn}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {children}

        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;