import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsloading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name);
                // send name ot firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsloading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsloading(false));
    }

    // observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsloading(false);
        });
        return unsubscribe;
    }, [])

    const logout = () => {
        setIsloading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsloading(false));
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout
    }
}
export default useFirebase;