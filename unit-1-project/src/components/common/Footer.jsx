import React from 'react';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="Footer">
            <hr />
            <div className="FooterBar">
                <p>Onyx Reflections</p>
                <p>© {currentYear} All rights reserved.</p>
            </div>
        </footer>
    );
}
export default Footer;