import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/intailize-firebase-authentication";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const createAccount = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserInfo = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    };

    const loginUserEmailPass = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signOutUser = () => {
        setIsLoading(true);
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
            const signOutUserInfo = {email: user?.email};
            console.log({signOutUserInfo});
            setUser(currentUser);
            setIsLoading(false);
            if(currentUser){
                const userInfo = {email: currentUser.email}
                fetch("http://localhost:5000/jwt",{
                    method: "POST",
                    credentials:"include",
                    headers:{
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log("token create response",data)
                })
            }
            else{
                fetch("http://localhost:5000/sign-out", {
                    method: "POST",
                    credentials: "include",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(signOutUserInfo)
                })
                .then(res => res.json())
                .then(data => {
                    console.log("token delete response", data);
                })
            }
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