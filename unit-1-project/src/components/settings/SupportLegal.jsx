import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';
import './settings.css';

function SupportLegal({ currentUser, firstName, setFirstName, message, setMessage, showModalWindow, setShowModalWindow }) {
    const navigate = useNavigate();
    //provide disclosures and disclaimers regarding app usage. 
    return (
        <div className="main" id="SupportLegal">

            <div className="SupportLegalLinks">
                <a className="link" href="#terms">Terms</a>
                <a className="link" href="#privacy">Privacy</a>
                <a className="link" href="#disclaimer">Disclaimer</a>
            </div>

            <div>
                <h1 id="terms">TERMS OF SERVICE</h1>
                <section className="terms">
                    <h2>Onyx Reflections — Terms of Service</h2>
                    <p className="last-updated"><strong>Last Updated:</strong> August 2026</p>
                    <p>Welcome to Onyx Reflections. By using our mobile or web application (the "Service"), you agree to these Terms of Service. Please read them carefully.</p>

                    <h3>1. Eligibility</h3>
                    <ul>
                        <li>You must be at least 13 years old to use this Service.</li>
                        <li>By creating an account, you represent that you meet this age requirement.</li>
                    </ul>

                    <h3>2. Your Account</h3>
                    <ul>
                        <li>You are responsible for safeguarding your account password.</li>
                        <li>You must notify us immediately of any unauthorized use of your account.</li>
                        <li>You agree to provide accurate account information.</li>
                    </ul>

                    <h3>3. User Content and Ownership</h3>
                    <ul>
                        <li><strong>Your Data is Yours:</strong> You retain full ownership of all thoughts, emotions, and text you input into Onyx Reflections.</li>
                        <li><strong>License to Us:</strong> You grant us a limited license to host and transmit your content on our cloud servers solely to provide the Service to you. We do not sell or monetize your journal entries.</li>
                    </ul>

                    <h3>4. Premium Subscriptions and Billing</h3>
                    <ul>
                        <li><strong>Free vs. Premium:</strong> Onyx Reflections offers a free version with basic journaling features and a paid Premium tier with advanced features.</li>
                        <li><strong>Billing Cycle:</strong> Premium subscriptions are billed monthly on a recurring basis.</li>
                        <li><strong>Cancellation Deadline:</strong> You may cancel your Premium subscription at any time. However, to avoid being charged for the upcoming calendar month, <strong>you must submit your cancellation request by the 15th day of the current month</strong>.</li>
                        <li><strong>Late Cancellations:</strong> If you cancel after the 15th of the month, your cancellation will take effect at the end of the following month, and you will not receive a refund for that next billing cycle.</li>
                        <li><strong>No Refunds:</strong> All fees are non-refundable, and we do not provide refunds or credits for any partial-month subscription periods.</li>
                    </ul>

                    <h3>5. Prohibited Conduct</h3>
                    <ul>
                        <li>You agree not to reverse-engineer the app.</li>
                        <li>You agree not to attempt to breach our security or access other users' data.</li>
                        <li>You agree not to use the app for any illegal purposes.</li>
                    </ul>

                    <h3>6. Termination</h3>
                    <ul>
                        <li>We reserve the right to suspend or terminate your account if you violate these terms.</li>
                        <li>You can delete your account and data at any time through the app settings.</li>
                    </ul>

                    <h3>7. Limitation of Liability</h3>
                    <ul>
                        <li>Onyx Reflections is provided "as is" without warranties of any kind.</li>
                        <li>We are not liable for any data loss, service interruptions, or emotional distress resulting from your use of the app.</li>
                    </ul>
                    <a className="link" href="#SupportLegal">Back to top</a>
                </section>

                <hr />

                <h1 id="privacy">PRIVACY POLICY</h1>
                <section className="privacy">
                    <h2>Onyx Reflections — Privacy Policy</h2>
                    <p className="last-updated"><strong>Last Updated:</strong> August 2026</p>
                    <p>At Onyx Reflections, we understand that your thoughts, feelings, and journal entries are deeply personal. We are committed to protecting your privacy.</p>

                    <h3>1. Information We Collect</h3>
                    <ul>
                        <li><strong>Account Information:</strong> Name, email address, and password when you create an account.</li>
                        <li><strong>Journal Data:</strong> The text, emotional tags, and logs you create within the app.</li>
                        <li><strong>Communications:</strong> When you contact us via our Contact Us page, support forms, or email, we collect your name, email address, and the specific contents of your message.</li>
                        <li><strong>Usage Data:</strong> Technical data like crash logs and app performance to help us improve the service.</li>
                    </ul>

                    <h3>2. How We Store Your Data</h3>
                    <ul>
                        <li>Your journal entries are transmitted securely and stored on protected cloud servers.</li>
                        <li>We use industry-standard encryption to protect your data both during transmission and while at rest on our servers.</li>
                    </ul>

                    <h3>3. How We Use Your Information</h3>
                    <ul>
                        <li>We use your journal data strictly to sync your journal across your devices and run the app features.</li>
                        <li><strong>We do not sell, rent, or share your personal journal entries with third-party advertisers.</strong></li>
                        <li>We use your communication data (feedback and support tickets) to respond to your inquiries and improve app functionality.</li>
                    </ul>

                    <h3>4. Data Control and Portability</h3>
                    <ul>
                        <li>You can edit or delete your entries at any time.</li>
                        <li>You can export your data in your app settings.</li>
                        <li>Deleting your account permanently erases your data from our active cloud servers.</li>
                    </ul>

                    <h3>5. Compliance</h3>
                    <ul>
                        <li>We comply with standard privacy laws regarding personal data protection.</li>
                        <li>If you are under 13, please do not use this app or send us any personal data.</li>
                    </ul>
                    <a className="link" href="#SupportLegal">Back to top</a>
                </section>

                <hr />

                <h1 id="disclaimer">DISCLAIMER</h1>
                <section className="disclaimer">
                    <h2>Mental Health & Support Disclaimer</h2>

                    <h3>Not a Medical Device or Professional Therapy</h3>
                    <p>Onyx Reflections is designed to be a personal reflection and self-care tool.</p>
                    <ul>
                        <li>It is <strong>not</strong> a substitute for professional mental health counseling, therapy, psychiatric care, or medical advice.</li>
                        <li>The app does not diagnose, treat, or cure any mental health conditions.</li>
                        <li>Always seek the advice of a qualified healthcare provider with any questions you have regarding a medical or mental health condition.</li>
                    </ul>

                    <h3>Crisis Resources</h3>
                    <p>If you are experiencing a mental health crisis, severe emotional distress, or thoughts of self-harm, please know that you are not alone. Please reach out for immediate help:</p>
                    <ul>
                        <li><strong>In the US:</strong> Call or text <strong>988</strong> to reach the Suicide & Crisis Lifeline, available 24/7. Services are free and confidential. You can also text <strong>HOME</strong> to <strong>741741</strong> to connect with the Crisis Text Line.</li>
                        <li><strong>In the UK:</strong> Call <strong>111</strong> to reach the NHS mental health services, or call Samaritans at <strong>116 123</strong>.</li>
                        <li><strong>In Canada:</strong> Call or text <strong>988</strong> for the Suicide Crisis Helpline.</li>
                    </ul>
                    <a className="link" href="#SupportLegal">Back to top</a>
                </section>
            </div>
        </div>
    );
}

export default SupportLegal;
