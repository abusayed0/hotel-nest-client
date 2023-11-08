import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/intailize-firebase-authentication";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState("josim");
    const [isLoading, setIsLoading] = useState(true);

    const createAccount = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserInfo = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };

    const loginUserEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    const authValue = {
        user,
        isLoading,
        createAccount,
        updateUserInfo,
        loginUserEmailPass,
        signOutUser,
        googleSignIn
    };

    useEffect(() => {

        const unSub = onAuthStateChanged(auth, currentUser => {
            console.log("current user inside auth", currentUser);
            setUser(currentUser);
            setIsLoading(false);
        });

        return () => {
            unSub();
        }

    }, []);
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.element.isRequired
}
export default AuthProvider;