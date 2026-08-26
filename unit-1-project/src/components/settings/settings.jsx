import { useState } from 'react';
import { useNavigate, Link, Outlet } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';
import AccountPrivacy from './AccountPrivacy.jsx';
import './settings.css';

function Settings({ isSubscribed, setIsSubscribed, currentUser, setCurrentUser, firstName, setFirstName, message, setMessage, showModalWindow, setShowModalWindow, setJournalUpdate}) {
    const navigate = useNavigate();
    //create menu for settings pages
    return (
        <div className="main settingsLayout">
            <div className="settingsBar">
                <h3>Menu</h3>
                <Link to="account-privacy" className="settingsBarItem">Account & Profile</Link>
                <Link to="security" className="settingsBarItem">Security & Privacy</Link>
                <Link to="appearance" className="settingsBarItem">Appearance & Display</Link>
                <Link to="notifications" className="settingsBarItem">Notifications</Link>
                <Link to="system" className="settingsBarItem">System & Localization</Link>
                <Link to="support" className="settingsBarItem">Support & Legal</Link>
            </div>

            <div className="settingsContent">
                <Outlet />
            </div>
        </div>

    );
}
export default Settings;
