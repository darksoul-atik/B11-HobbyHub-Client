import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";
import { AuthContext } from "../contexts/AuthContext";



const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  //User Tracking State
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);
  const [loggedOut, setLoggedOut] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [msgType, setmsgType] = useState(" ");

  //Login Functionality
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Register Functionality
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //SignOut Functionality
  const logOut = () => {
    return signOut(auth);
  };

  //Google Login
  const googleLogin = () => {
    setLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  //Update User
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  //Forget Password

  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //Auth Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Context Values
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    forgetPassword,
    googleLogin,
    updateUser,
    loading,
    setLoading,
    logged,
    setLogged,
    loggedOut,
    setLoggedOut,
    errorMsg,
    setErrorMsg,
    msgType,
    setmsgType,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
