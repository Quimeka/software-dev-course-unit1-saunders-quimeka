import React from 'react';
import { Link } from 'react-router';
import OnyxReflections from '../../assets/OnyxReflections.png';

function Header({ currentUser, handleLogout }) {
    return (
        <header className="Header">
            <div>
                <h1 id="appTitle">Onyx Reflections</h1>
                {/*<img src={OnyxReflections} alt="Onyx Reflections Logo" className="logo" />*/}
                <h2 id="appPhrase">Your personal space for mindful reflection.</h2>
            </div>

            <nav>
                {currentUser !== null ? (
                    <div className="HeaderBar">
                        <Link to="/mood">[New Journal Entry]</Link>
                        <Link to="/calendar">[View Calendar]</Link>
                        <Link to="/contact-us">[Contact Us]</Link>
                        <Link to="/logged-out" onClick={handleLogout}>[Log Out]</Link>
                    </div>
                ) : null}
            </nav>

            <hr />
        </header>
    );
}

export default Header;
