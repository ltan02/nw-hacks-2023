import React, { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken, setAuthenticated }) => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

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

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        if (userCredential) {
          setAuthenticated(true);
          window.localStorage.setItem("auth", "true");
          navigate("/collectInformation");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code: " + errorCode);
        console.log(errorMessage);
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
      <button onClick={login}>Log in</button>
      {/* <div
        className="absolute w-[575px] h-[108px] left-[468px] top-[132px] 
        font-medium text-8xl leading-[120px] text-center capitalize text-[#1B1C57]"
      >
        Hello
      </div>
      <div
        className="absolute w-[612px] h-[515px] left-[450px] top-[274px] 
        bg-[#CCCCCC]/[0.2] rounded-[30px]"
      >
        <div className="absolute w-[449px] h-[63px] bg-white left-[80px] top-[100px]"></div>
      </div> */}
    </div>
  );
};

export default Login;
