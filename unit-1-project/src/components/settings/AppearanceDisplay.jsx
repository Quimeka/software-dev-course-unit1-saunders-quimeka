import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';
import './settings.css';

function AppearanceDisplay({ isSubscribed, setIsSubscribed, currentUser, firstName, setFirstName, message, setMessage, showModalWindow, setShowModalWindow }) {
    const navigate = useNavigate();

    return (
        <div>
            <p><em> Coming soon...</em></p>

        </div>
    );

}

export default AppearanceDisplay;
