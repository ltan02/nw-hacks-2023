import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/landing-page/Landing";
import CollectInformation from "./components/collect-information-page/CollectInformation";
import Login from "./components/authentication/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/collectInformation" element={<CollectInformation />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
