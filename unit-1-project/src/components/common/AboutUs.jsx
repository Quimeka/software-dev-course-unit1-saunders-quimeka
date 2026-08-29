import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';

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
                    <h3>Thank you for being here, {firstName}!</h3>
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
                <h4>Built for Real Days, Not Perfect Classrooms</h4>
                <p>
                    If you have ever opened a therapy or journaling app only to close it immediately out of sheer exhaustion, you are not alone.
                    Many wellness tools are built around rigid templates, complex psychological lingo, and overwhelming checklists of specific emotions.
                </p>
                <p>
                    Instead of letting you freely document your thoughts, they force you to spend your limited mental energy figuring out how to fit your messy, real-world feelings into a pre-defined box. When a prompt doesn't fit your mood, trying to force it is exhausting.
                </p>
                <p>
                    Onyx Reflections was created to solve this exact problem. This space is designed to lower the barrier to self-expression. We believe that healing requires breathing room, not homework. Your journal should meet you exactly where you are today—without demands, jargon, or forced vulnerability.
                </p>
                <a className="link" href="#AboutUs">Back to top</a>
            </section>
            <hr />
            <section id="noteFromFounder">
                <h3> Our Story: A Note From the Founder</h3>
                <blockquote className="onyxQuote">
                    <p>
                        I did therapy for several years, and one of the hardest parts was simply facing myself long enough to want to journal. The apps I tried used clinical lingo I didn't understand, forcing me to choose from emotions I didn't even recognize at face value. It was discouraging sometimes because I spent more time trying to self-diagnose what thinking pattern I was trapped in or what emotion I was feeling when nothing fit perfectly, instead of just releasing them or sitting with them. There is so much pressure to put a label on things or fit into a box before you can even get through processing what you are actually going to write.
                    </p>
                    <p>
                        I built Onyx Reflections to lift that pressure. I needed a space that respected my mental bandwidth—something that would give me a totally blank page to just express myself when I was completely exhausted, but also offer guided prompts when I actively wanted that structure. This platform is a breath of fresh air for that struggle, built for anyone who just wants a safe, uncomplicated place to vent, clear their head, and breathe.
                    </p>
                    <p>
                        Your healing journey doesn't have a syllabus, and you don’t have to get it right to make it count. Whether you have pages of thoughts to unload or only have the energy to tap your current mood and close the tab, you are doing the work. Showing up exactly as you are today is enough.
                    </p>
                    <br />
                    <p style={{opacity: 0.50}}>
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
                        <p>Decide if you want a guided path or just a space to unload.</p>
                    </li>
                    <li>
                        <strong>The Blank Canvas</strong>
                        <p>Get a completely empty page to vent freely when you are exhausted.
                        </p>
                    </li>
                    <li>
                        <strong>Simple Prompts</strong>
                        <p>Access gentle guiding questions only if you actively want them.
                        </p>
                    </li>
                    <li>
                        <strong>Visual Pattern Tracking</strong>
                        <p>Log your daily mood quickly to populate a simple monthly calendar view.
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
                        <strong>No Forced Boxes</strong>
                        <p>We never force you to label or categorize your emotions on face value.</p>
                    </li>
                    <li>
                        <strong>Protects Your Bandwidth</strong>
                        <p>Your energy levels dictate the app experience, never the other way around.
                        </p>
                    </li>
                    <li>
                        <strong>Honors Free Expression</strong>
                        <p>Provides a judgment-free zone meant for raw, unfiltered thought processing.
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
