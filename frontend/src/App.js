import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing-page/Landing"
import CollectInformation from "./components/collect-information-page/CollectInformation";
import SignUp from "./components/signup-page/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/collectInformation" element={<CollectInformation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
