import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

function AboutUs({ currentUser, firstName }) {
    const navigate = useNavigate();
    const [user, setUser] = useState(false);

    useEffect(() => {
        if (!currentUser) {
            setUser(false);
        } else {
            setUser(true);
        }
    }, [currentUser]);

    return (
        <div className="main" id="AboutUs">
            {user && (
                <div className="greeting">
                    <h2> Welcome to Onyx Reflections!</h2>
                    <h3>Thank you for being here, {firstName}.</h3>
                </div>
            )}
            {!user && (
                <div className="greeting">
                    <h3>Welcome to Onyx Reflections. </h3>
                    <p>A safe space built for your real days, not your perfect ones... </p>
                </div>
            )}
            <div className="AboutUsLinks">
                <a className="link" href="#appIntro">Introduction</a>
                <a className="link" href="#noteFromFounder">Note from Our Founder</a>
                <a className="link" href="#howItWorks">How It Works</a>
                <a className="link" href="#different">Why Onyx is Different</a>
            </div>
            <section id="appIntro">
                <p>
                    If you’ve ever opened a journaling app and closed it right away because it felt like too much work, you’re not alone.
                </p>
                <p>
                    Many wellness tools are full of rigid templates, clinical terms, and checklists of emotions. Instead of letting you freely write your thoughts, they ask you to fit your real feelings into a box.
                </p>
                <p>
                    Onyx Reflections is just a space to breathe and write.
                </p>
                <a className="link" href="#AboutUs">Back to top</a>
            </section>
            <hr />
            <section id="noteFromFounder">
                <h3> Our Story: A Note From the Founder</h3>
                <blockquote className="onyxQuote">
                    <p>
                        There is so much pressure to get things right everywhere else. At work, in society, at home, within family dynamics, and inside relationships. It feels like we always have to perform. When it came to my own thoughts, and just needing a safe space to be vulnerable, I didn't want more labels. I didn't want to force myself into a box just to process the conflicted parts between my head and my heart. Journaling should be a gentle landing, not a test. You shouldn't have to figure out what "thinking trap" you’re stuck in before you even open your heart to write.
                    </p>
                    <p>
                        That’s why I built Onyx Reflections. Being in therapy for years made me realize I just needed a space that respected my daily mental energy. I wanted a blank page where I could simply exhale and get my thoughts out—free from clinical jargon, rigid dropdown menus, or the pressure to perform and label emotions I couldn't easily explain. Instead of forcing you to pick specific emotions like anger or sadness, Onyx simply checks in on your energy level and asks how you want to process your thoughts today. If you're completely drained, you can write freely in an open-ended space or just log your mood and close the tab. But on the days you actually feel up for some structure, you can grab guided prompts that act like a quiet, low-pressure accountability partner to help you process.
                    </p>
                    <p>
                        I created this platform to be a quiet, uncomplicated place to vent, clear your head, and just take a breath. Your healing journey doesn't have a syllabus, and you don’t have to do it perfectly for it to count. Whether you have pages of thoughts to unload or just enough energy to tap your mood and close the tab, you are still showing up for yourself. Exactly as you are today is enough.
                    </p>
                    <br />
                    <p style={{ opacity: 0.50 }}>
                        From one healing soul to another...
                    </p>
                </blockquote>
                <a className="link" href="#AboutUs">Back to top</a>
            </section>
            <hr />
            <section id="howItWorks">
                <h3>How It Works</h3>
                <ul>
                    <li>
                        <strong>The Energy Check-In</strong>
                        <p>Tell the app exactly how much mental bandwidth you have right now.</p>
                    </li>
                    <li>
                        <strong>Choose Your Depth</strong>
                        <p>Decide if you want a completely blank canvas to write freely, or if you prefer guided prompts.</p>
                    </li>
                    <li>
                        <strong>Simple Prompts</strong>
                        <p>Access low-pressure guiding questions only on the days you actively want them.
                        </p>
                    </li>
                    <li>
                        <strong>Simple Mood Tracking</strong>
                        <p>Log your emotional state quickly to populate a visual monthly view without the pressure of labels.
                        </p>
                    </li>
                </ul>
                <a className="link" href="#AboutUs">Back to top</a>
            </section>
            <hr />
            <section id="different">
                <h3>Why Onyx Reflections is Different</h3>
                <ul>
                    <li>
                        <strong>Zero Academic Jargon</strong>
                        <p>We use simple, universal language so you can focus on writing, not decoding.</p>
                    </li>
                    <li>
                        <strong>No Forced Emotion Boxes</strong>
                        <p>We never make you label or categorize how you feel just to get access to a blank page.</p>
                    </li>
                    <li>
                        <strong>Protects Your Bandwidth</strong>
                        <p>Your energy level dictates how the app responds to you—never the other way around.
                        </p>
                    </li>
                    <li>
                        <strong>Honors Free Expression</strong>
                        <p>Provides a completely safe, quiet space meant for raw, unfiltered processing.
                        </p>
                    </li>
                </ul>
                <a className="link" href="#AboutUs">Back to top</a>
            </section>

            <section className="NavigationPanel">
                {user ? (
                    <div>
                        <button className="generalButton" onClick={() => navigate('/mood')}>
                            Journal Now
                        </button>
                        <button className="generalButton" onClick={() => navigate('/calendar')}>
                            View My Calendar
                        </button>
                    </div>
                ) : (
                    <div>
                        <button className="generalButton" onClick={() => navigate('/')}>
                            Home Page
                        </button>
                        <button className="generalButton" onClick={() => navigate('/create-account')}>
                            Create Account
                        </button>
                    </div>
                )}
            </section>

        </div>
    );
}
export default AboutUs;
