import { useEffect } from 'react';
import { useNavigate, Link, Outlet } from 'react-router';
import './settings.css';

function Settings({ isSubscribed, setIsSubscribed, currentUser, setCurrentUser, firstName, setFirstName, message, setMessage, showModalWindow, setShowModalWindow, setJournalUpdate }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/Login');
        }
    }, [currentUser, navigate]);

    return (
        <div className="main settingsLayout">
            <div className="settingsBar">
                <h3>Menu</h3>
                <Link to="account-information" className="settingsBarItem">Account & Profile</Link>
                <Link to="security" className="settingsBarItem">Security & Privacy</Link>
                <Link to="appearance-display" className="settingsBarItem">Appearance & Display</Link>
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
