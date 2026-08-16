import React from 'react';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <hr />
            <section>
                <strong>Onyx Reflections</strong>
                <p>© {currentYear} All rights reserved.</p>
            </section>
        </footer>
    );
}
export default Footer;