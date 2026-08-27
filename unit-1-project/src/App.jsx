import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router";

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
import { loggedJournalEntries } from "./components/common/userGlobals.js";
import UpdateJournalEntryPage from "./components/journal/updateJournalEntry.jsx";
import Settings from "./components/settings/settings.jsx";
import AccountInformation from "./components/settings/AccountManagement/AccountInformation.jsx";
import AppearanceDisplay from "./components/settings/AppearanceDisplay.jsx";
import Notifications from "./components/settings/Notifications.jsx";
import SupportLegal from "./components/settings/SupportLegal.jsx";
import SystemLocal from "./components/settings/SystemLocal.jsx";
import SecurityPrivacy from "./components/settings/SecurityPrivacy.jsx";
import Subscription from "./components/settings/AccountManagement/Subscription.jsx";
import AccountDeletion from "./components/settings/AccountManagement/AccountDeletion.jsx";
import { getDate } from "./components/common/getTodaysDate.js";


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
  const [journalUpdate, setJournalUpdate] = useState(loggedJournalEntries);
  const [entryData, setEntryData] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "default");
  const [font, setFont] = useState(localStorage.getItem("font") || "default");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--font-selected", font);
  }, [font]);

  const handleLogout = () => {
    setCurrentUser(null);
    setTheme("default");
    setFont("default");
  }

  return (
    <div data-theme={theme}>
      <Header currentUser={currentUser} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={
          <Home>
            <LoginUser isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          </Home>
        } />

        <Route path="/Login" element={
          <Home>
            <LoginUser isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          </Home>
        } />

        <Route path="/create-account" element={
          <Home>
            <CreateUser setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          </Home>
        } />

        <Route path="/mood" element={
          <UserMood currentUser={currentUser} moodData={moodData} setMoodData={setMoodData} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
        } />

        <Route path="/depth" element={
          <UserDepth currentUser={currentUser} moodData={moodData} depthData={depthData} setDepthData={setDepthData} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} setJournalUpdate={setJournalUpdate} />
        } />

        <Route path="/contact-us" element={
          <ContactUs currentUser={currentUser} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
        } />

        <Route path="/journal-entry" element={
          <JournalEntryPage currentUser={currentUser} moodData={moodData} setMoodData={setMoodData} depthData={depthData} setDepthData={setDepthData} userJournalEntry={userJournalEntry} setUserJournalEntry={setUserJournalEntry} entryMode={entryMode} setEntryMode={setEntryMode} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} setJournalUpdate={setJournalUpdate} />
        } />

        <Route path="/calendar" element={
          <CalendarPage currentUser={currentUser} date={date} setDate={setDate} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} journalUpdate={journalUpdate} setJournalUpdate={setJournalUpdate} entryData={entryData} setEntryData={setEntryData} />
        } />

        <Route path="/journal-review" element={
          <JournalReview currentUser={currentUser} date={date} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} journalUpdate={journalUpdate} setJournalUpdate={setJournalUpdate} entryData={entryData} setEntryData={setEntryData} />
        } />

        <Route path="/edit-entry" element={
          <UpdateJournalEntryPage currentUser={currentUser} userJournalEntry={userJournalEntry} setUserJournalEntry={setUserJournalEntry} entryMode={entryMode} setEntryMode={setEntryMode} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} entryData={entryData} setShowModalWindow={setShowModalWindow} setJournalUpdate={setJournalUpdate} />
        } />

        <Route path="/Settings" element={
          <Settings isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} currentUser={currentUser} setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} setJournalUpdate={setJournalUpdate}font={font} setFont={setFont}/>
        } >

          <Route index element={<Navigate to="account-privacy" replace />} />

          <Route path="account-privacy" element={
            <AccountInformation isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} currentUser={currentUser} setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} setJournalUpdate={setJournalUpdate} />
          } />

          <Route path="subscription" element={
            <Subscription isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} currentUser={currentUser} setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          } />

          <Route path="account-deletion" element={
            <AccountDeletion isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} currentUser={currentUser} setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} setJournalUpdate={setJournalUpdate} />
          } />

          <Route path="appearance" element={
            <AppearanceDisplay isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} currentUser={currentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} theme={theme} setTheme={setTheme} font={font} setFont={setFont} />
          } />

          <Route path="notifications" element={
            <Notifications currentUser={currentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          } />

          <Route path="system" element={
            <SystemLocal currentUser={currentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          } />

          <Route path="support" element={
            <SupportLegal currentUser={currentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          } />

          <Route path="security" element={
            <SecurityPrivacy currentUser={currentUser} setCurrentUser={setCurrentUser} firstName={firstName} setFirstName={setFirstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
          } />
        </Route>
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
