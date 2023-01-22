import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = ({ setToken, setAuthenticated }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let weakPassword = false;
  let emailInUse = false;

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        setAuthenticated(true);
        window.localStorage.setItem("auth", "true");
        userCred.getIdToken().then((token) => {
          setToken(token);
        });
      }
    });
  }, []);

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        if (userCredential) {
          setAuthenticated(true);
          window.localStorage.setItem("auth", "true");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        weakPassword = errorCode === "auth/weak-password";
        emailInUse = errorCode === "auth/email-already-in-use";
      });
  };

  return (
    <div>
      <input
        placeholder="Email"
        type="text"
        id="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        placeholder="Password"
        type="text"
        id="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button onClick={signUp}>Sign up</button>
    </div>
  );
};

export default Signup;
