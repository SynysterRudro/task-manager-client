import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


    // google sign in 

    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // observer part 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
        })

        return () => unsubscribe()
    }, [])


    // logout section 

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        googleLogin,
        user,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;