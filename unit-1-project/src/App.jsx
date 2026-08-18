import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";

import Home from "./components/common/Home.jsx";
import LoginUser from "./components/authentication/LoginUser.jsx";
import CreateUser from "./components/authentication/CreateUser.jsx";
import UserMood from "./components/user/UserMood.jsx";
import UserDepth from "./components/user/UserDepth.jsx";
import JournalEntryPage from "./components/journal/JournalEntryPage.jsx";
import CalendarPage from "./components/calendar/CalendarPage.jsx";
import ContactUs from "./components/common/ContactUs.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";


function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [moodData, setMoodData] = useState(null);
  const [depthData, setDepthData] = useState(null);
  const [userJournalEntry, setUserJournalEntry] = useState("");
  const [entryMode, setEntryMode] = useState(null);

  const handleLogout = () => {
    setCurrentUser(null);
    navigate("/logged-out");
  }

  return (
    <div>
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      
      <Routes>
        <Route path="/" element={
          <Home>
            <LoginUser currentUser={currentUser} setCurrentUser={setCurrentUser} setMoodData={setMoodData} setDepthData={setDepthData}/>
          </Home>
        } />

        <Route path="/Login" element={
          <Home>
            <LoginUser currentUser={currentUser} setCurrentUser={setCurrentUser} setMoodData={setMoodData} setDepthData={setDepthData}/>
          </Home>
        } />

        <Route path="/create-account" element={
          <Home>
            <CreateUser setCurrentUser={setCurrentUser} />
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
          <JournalEntryPage currentUser={currentUser} moodData={moodData} setMoodData={setMoodData} depthData={depthData} setDepthData={setDepthData} userJournalEntry={userJournalEntry} setUserJournalEntry={setUserJournalEntry} entryMode={entryMode} setEntryMode={setEntryMode} />
        } />

        <Route path="/calendar" element={
          <CalendarPage currentUser={currentUser} />
        } />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
