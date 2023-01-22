import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Axios from "axios";
import Landing from "./components/landing-page/Landing"
import CollectInformation from "./components/collect-information-page/CollectInformation";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [weight, setWeight] = useState(0);
  const [peanutAllergy, setPeanutAllergy] = useState(true);
  const [dairyAllergy, setDairyAllergy] = useState(true);
  const [shellfishAllergy, setShellfishAllergy] = useState(true);
  const [dailyMealBudget, setDailyMealBudget] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:8000/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:8000/createUser", {
      name, 
      username,
    }).then((response) => {
        setListOfUsers([
          ...listOfUsers,
          {
            name,
            username,
            weight,
            peanutAllergy,
            dairyAllergy,
            shellfishAllergy,
            dailyMealBudget
          },
        ]);
      });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>

      <div>
        <input 
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
        }}/>
        <input 
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
        }}/>
        <button onClick={createUser}>Create User</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/collectInformation" element={<CollectInformation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
