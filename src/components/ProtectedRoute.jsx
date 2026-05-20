// src/components/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/firebase";

import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {

  const [user, setUser] = useState(undefined);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

    });

    return () => unsubscribe();

  }, []);

  // LOADING
  if (user === undefined) {

    return (

      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">

        Loading...

      </div>

    );

  }

  // NOT LOGGED IN
  if (!user) {

    return <Navigate to="/login" />;

  }

  // LOGGED IN
  return children;

}