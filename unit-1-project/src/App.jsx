import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";

import Home from "./components/common/Home.jsx";
import LoginUser from "./components/authentication/LoginUser.jsx";
import CreateUser from "./components/authentication/CreateUser.jsx";
import Logout from "./components/common/Logout.jsx";


function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [moodData, setMoodData] = useState("");
  const [moodEntries, setMoodEntries] = useState([]);
  const [depthData, setDepthData] = useState("");
  const [userJournalEntry, setUserJournalEntry] = useState("");
  const [entryMode, setEntryMode] = useState(null);

  const handleLogout = () => {
    setCurrentUser(null);
    alert("You've successfully logged out!");
    navigate("/logged-out");
  }

  return (
    <div>
      {currentUser !== null ? (
        <div>
          <button onClick={handleLogout}>Log Out</button>
          <hr />
        </div>
      ) : null}

      {currentUser !== null ? (
        <div>
          <Link to="/calendar">Calendar</Link>
          <br /><br />
        </div>
      ) : null}

      <nav>
        <ul>
          <li><Link to="/Login">Log in</Link></li>
          <li><Link to="/create-account">Register now</Link></li>
        </ul>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={
          <Home>
            <LoginUser currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Home>
        } />

        <Route path="/Login" element={
          <Home>
            <LoginUser currentUser={currentUser} setCurrentUser={setCurrentUser} />
          </Home>
        } />

        <Route path="/create-account" element={
          <Home>
            <CreateUser />
          </Home>
        } />

        <Route path="/logged-out" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
