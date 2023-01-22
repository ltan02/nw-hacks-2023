import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing-page/Landing";
import CollectInformation from "./components/collect-information-page/CollectInformation";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import SignUp from "./components/signup-page/SignUp";
import { Link } from "react-router-dom"

function App() {
  const [token, setToken] = useState("");
  const [authenticated, setAuthenticated] = useState(
    false || window.localStorage.getItem("auth") === "true",
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing authenticated={authenticated} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/collectInformation" element={<CollectInformation />} />
        <Route
          path="/login"
          element={
            <Login setToken={setToken} setAuthenticated={setAuthenticated} />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup setToken={setToken} setAuthenticated={setAuthenticated} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
