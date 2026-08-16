import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router";

import Home from "./components/common/Home.jsx";
import LoginUser from "./components/authentication/LoginUser.jsx";
import CreateUser from "./components/authentication/CreateUser.jsx";
import UserMood from "./components/user/UserMood.jsx";
import UserDepth from "./components/user/UserDepth.jsx";
import JournalEntryPage from "./components/journal/JournalEntryPage.jsx";
import CalendarPage from "./components/calendar/CalendarPage.jsx";
import ContactUs from "./components/common/ContactUs.jsx";
import Logout from "./components/common/Logout.jsx";
import Header from "./components/common/header.jsx";
import Footer from "./components/common/footer.jsx";


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
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <br />
      <br />
      <br />
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

        <Route path="/calendar" element={
          <CalendarPage currentUser={currentUser} />
        } />

        <Route path="/logged-out" element={
          <Logout />
        } />

      </Routes>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
