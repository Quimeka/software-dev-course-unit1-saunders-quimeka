import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";

import Home from "./components/common/Home.jsx";
import LoginUser from "./components/authentication/LoginUser.jsx";
import CreateUser from "./components/authentication/CreateUser.jsx";
import UserMood from "./components/user/UserMood.jsx";
import UserDepth from "./components/user/UserDepth.jsx";
import JournalEntryPage from "./components/journal/JournalEntryPage.jsx";
import CalendarPage from "./components/calendar/CalendarPage.jsx";
import ContactUs from "./components/contact/ContactUs.jsx";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import JournalReview from "./components/journal/JournalReview.jsx";


function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [firstName, setFirstName] = useState(currentUser ? currentUser.userFirst : "");
  const [moodData, setMoodData] = useState(null);
  const [depthData, setDepthData] = useState(null);
  const [userJournalEntry, setUserJournalEntry] = useState("");
  const [entryMode, setEntryMode] = useState(null);
  const [date, setDate] = useState(new Date());


  const handleLogout = () => {
    setCurrentUser(null);
  }

  return (
    <div>
      <Header currentUser={currentUser} handleLogout={handleLogout} />

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
            <CreateUser setCurrentUser={setCurrentUser} />
          </Home>
        } />

        <Route path="/mood" element={
          <UserMood currentUser={currentUser} moodData={moodData} setMoodData={setMoodData} firstName={firstName} />
        } />

        <Route path="/depth" element={
          <UserDepth currentUser={currentUser} moodData={moodData} depthData={depthData} setDepthData={setDepthData} firstName={firstName} />
        } />

        <Route path="/contact-us" element={
          <ContactUs currentUser={currentUser} />
        } />

        <Route path="/journal-entry" element={
          <JournalEntryPage currentUser={currentUser} moodData={moodData} setMoodData={setMoodData} depthData={depthData} setDepthData={setDepthData} userJournalEntry={userJournalEntry} setUserJournalEntry={setUserJournalEntry} entryMode={entryMode} setEntryMode={setEntryMode} firstName={firstName} />
        } />

        <Route path="/calendar" element={
          <CalendarPage currentUser={currentUser} date={date} setDate={setDate} />
        } />

        <Route path="/journal-review" element={
          <JournalReview currentUser={currentUser} date={date} firstName={firstName} />
        } />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
