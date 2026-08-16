import React from 'react';
import { Link } from 'react-router';

function Header({ currentUser, handleLogout }) {
    return (
        <header>
            <div>
                <h1>Onyx Reflections</h1>
                <h2><em>Your personal space for mindful reflection.</em></h2>
            </div>

            <nav>
                {currentUser !== null ? (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
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
