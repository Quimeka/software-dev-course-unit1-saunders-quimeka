import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";

import Home from "./components/common/Home.jsx";
import LoginUser from "./components/authentication/LoginUser.jsx";
import CreateUser from "./components/authentication/CreateUser.jsx";
import UserMood from "./components/user/UserMood.jsx";
import UserDepth from "./components/user/UserDepth.jsx";
import JournalEntryPage from "./components/journal/JournalEntryPage.jsx";
import ContactUs from "./components/common/ContactUs.jsx";
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
        <div sytle={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
          <Link to="/calendar">Calendar</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/logged-out" onClick={handleLogout}>Log Out</Link>
          <hr />
        </div>
      ) : null}

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

        <Route path="/mood" element={
          <UserMood currentUser={currentUser} moodData={moodData} setMoodData={setMoodData} />
        } />

        <Route path="/depth" element={
          <UserDepth currentUser={currentUser} depthData={depthData} setDepthData={setDepthData} />
        } />

        <Route path="/contact-us" element={
          <ContactUs currentUser={currentUser} />
        } />

        <Route path="/journal-entry" element={
          <JournalEntryPage currentUser={currentUser} moodData={moodData} depthData={depthData} userJournalEntry={userJournalEntry} setUserJournalEntry={setUserJournalEntry} entryMode={entryMode} setEntryMode={setEntryMode} />
        } />


        <Route path="/logged-out" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
