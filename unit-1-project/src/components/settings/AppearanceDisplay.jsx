import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';
import './settings.css';

function AppearanceDisplay({ isSubscribed, setIsSubscribed, currentUser, firstName, setFirstName, message, setMessage, showModalWindow, setShowModalWindow, theme, setTheme, font, setFont }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);
    //update theme for application
    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };
    //update font for application - application title
    const handleFontChange = (e) => {
        setFont(e.target.value);
    };
    //dropdowns for user preferences (theme, font, size coming soon...)
    return (
        <div className="main" >
            <div>
                <h3>Theme Selection</h3>
                <form>
                    <select
                        id="themeSelection"
                        value={theme}
                        onChange={handleThemeChange}
                    >
                        <option value="default">Default</option>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </form>
            </div>
            <div>
                <h3>Font Selection</h3>
                <form>
                    <select
                        id="fontSelection"
                        value={font}
                        onChange={handleFontChange}
                    >
                        <option value="Georgia" style={{ fontFamily: 'Georgia, serif' }}>Georgia</option>
                        <option value="Times New Roman" style={{ fontFamily: "'Times New Roman', Times, serif" }}>Times New Roman</option>
                        <option value="Arial" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>Arial</option>
                        <option value="Helvetica" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Helvetica</option>
                        <option value="Arial Black" style={{ fontFamily: "'Arial Black', Gadget, sans-serif" }}>Arial Black</option>
                        <option value="Impact" style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}>Impact</option>
                        <option value="Lucida Sans Unicode" style={{ fontFamily: "'Lucida Sans Unicode', 'Lucida Grande', sans-serif" }}>Lucida Sans Unicode</option>
                        <option value="Tahoma" style={{ fontFamily: 'Tahoma, Geneva, sans-serif' }}>Tahoma</option>
                        <option value="Verdana" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>Verdana</option>
                        <option value="Courier New" style={{ fontFamily: "'Courier New', Courier, monospace" }}>Courier New</option>
                        <option value="Lucida Console" style={{ fontFamily: "'Lucida Console', Monaco, monospace" }}>Lucida Console</option>
                        <option value="serif" style={{ fontFamily: 'serif' }}>serif</option>
                        <option value="sans-serif" style={{ fontFamily: 'sans-serif' }}>sans-serif</option>
                        <option value="cursive" style={{ fontFamily: 'cursive' }}>cursive</option>
                        <option value="fantasy" style={{ fontFamily: 'fantasy' }}>fantasy</option>
                        <option value="monospace" style={{ fontFamily: 'monospace' }}>monospace</option>
                    </select>
                </form>
            </div>
        </div>
    );

}

export default AppearanceDisplay;
