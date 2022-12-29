import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    // email password sign up 

    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with email password 

    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }



    // google sign in 

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // observer part 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe()
    }, [])


    // logout section 

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        googleLogin,
        emailSignUp,
        emailSignIn,
        user,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;