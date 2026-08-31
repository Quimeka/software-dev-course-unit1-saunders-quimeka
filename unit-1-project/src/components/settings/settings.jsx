import { useEffect } from 'react';
import { useNavigate, Link, Outlet } from 'react-router';
import './settings.css';

function Settings({ currentUser }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    return (
        <div className="main settingsLayout">
            <div className="settingsBar">
                <h3>Menu</h3>
                <Link to="account-information" className="settingsBarItem">Account & Profile</Link>
                <Link to="security" className="settingsBarItem">Security & Privacy</Link>
                <Link to="appearance-display" className="settingsBarItem">Appearance & Display</Link>
                <Link to="support" className="settingsBarItem">Support & Legal</Link>
            </div>

            <div className="settingsContent">
                <Outlet />
            </div>
        </div>

    );
}
export default Settings;
