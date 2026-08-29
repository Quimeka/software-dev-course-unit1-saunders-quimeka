import React from 'react';
import { Link } from 'react-router';
import onyxreflections from './../../assets/onyxreflections.png'


function Header({ currentUser, handleLogout }) {
    //if user logged in, display navigation/header bar. Otherwise, do nothing.
    return (
        <header className="Header">
            <div>
                <section className="titlelogo">
                    <h1 id="appTitle">Onyx Reflections</h1>
                    <img className="logo" src={onyxreflections} alt="Onyx Reflections Logo" />
                </section>
                <h2 id="appPhrase">Your personal space for mindful reflection.</h2>
            </div>

            <nav>
                {currentUser !== null ? (
                    <div className="HeaderBar">
                        <Link to="/about-us">[About Onyx Reflections]</Link>
                        <Link to="/mood">[New Journal Entry]</Link>
                        <Link to="/calendar">[View Calendar]</Link>
                        <Link to="/contact-us">[Contact Us]</Link>
                        <Link to="/settings"> [Settings]</Link>
                        <Link to="/" onClick={handleLogout}>[Log Out]</Link>
                    </div>
                ) : <div className="HeaderBar">
                    <Link to="/about-us">[About Onyx Reflections]</Link>
                </div>
                }
            </nav>

            <hr />
        </header>
    );
}

export default Header;
