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
  const [firstName, setFirstName] = useState("");
  const [moodData, setMoodData] = useState(null);
  const [depthData, setDepthData] = useState(null);
  const [userJournalEntry, setUserJournalEntry] = useState("");
  const [entryMode, setEntryMode] = useState(null);
  const [date, setDate] = useState(new Date());
  const [showModalWindow, setShowModalWindow] = useState(false);
  const [message, setMessage] = useState("");


  const handleLogout = () => {
    setCurrentUser(null);
  }

  return (
    <div>
      <Header currentUser={currentUser} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={
          <Home>
            <LoginUser setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          </Home>
        } />

        <Route path="/Login" element={
          <Home>
            <LoginUser setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          </Home>
        } />

        <Route path="/create-account" element={
          <Home>
            <CreateUser setCurrentUser={setCurrentUser} firstName={firstName} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          </Home>
        } />

        <Route path="/mood" element={
          <UserMood currentUser={currentUser} moodData={moodData} setMoodData={setMoodData} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
        } />

        <Route path="/depth" element={
          <UserDepth currentUser={currentUser} moodData={moodData} depthData={depthData} setDepthData={setDepthData} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
        } />

        <Route path="/contact-us" element={
          <ContactUs currentUser={currentUser} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
        } />

        <Route path="/journal-entry" element={
          <JournalEntryPage currentUser={currentUser} moodData={moodData} setMoodData={setMoodData} depthData={depthData} setDepthData={setDepthData} userJournalEntry={userJournalEntry} setUserJournalEntry={setUserJournalEntry} entryMode={entryMode} setEntryMode={setEntryMode} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
        } />

        <Route path="/calendar" element={
          <CalendarPage currentUser={currentUser} date={date} setDate={setDate} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
        } />

        <Route path="/journal-review" element={
          <JournalReview currentUser={currentUser} date={date} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
        } />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
