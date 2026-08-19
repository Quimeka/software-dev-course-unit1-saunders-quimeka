import { useState } from 'react';
import contactUs from './ContactUs.jsx';
import getUserInfo from '../authentication/getUserInfo.js';
import ModalWindow from '../common/ModalWindow.jsx';

function ContactUs({ currentUser }) {
    const userInformation = getUserInfo(currentUser);
    const [feedbackStatus, setFeedbackStatus] = useState("");
    const [showModalWindow, setShowModalWindow] = useState(false)


    const [formData, setFormData] = useState({
        id: userInformation.userId,
        name: userInformation.userFirst + ' ' + userInformation.userLast,
        email: userInformation.userEmail,
        message: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFeedbackStatus("");

        if (!formData.message) {
            setFeedbackStatus("Please be sure to leave us a message!");
            setShowModalWindow(true);
            return;
        }

        contactUs(formData.id, formData.name, formData.email, formData.message);

        setFeedbackStatus(`Submitted. Thank you!`);
        setShowModalWindow(true);

        setFormData({
            id: userInformation.userId,
            name: userInformation.userFirst + ' ' + userInformation.userLast,
            email: userInformation.userEmail,
            message: "",
        });

    };

    return (
        <div className="main">
            <div className="ContactUs">

                <h1>Contact Us</h1>

                {showModalWindow && (
                    <ModalWindow
                        message={feedbackStatus}
                        onClose={() => setShowModalWindow(false)}>
                    </ModalWindow>
                )}

                <p><strong> Name: </strong>{formData.name}</p>
                <p><strong> Email: </strong>{formData.email}</p>

                <form onSubmit={handleSubmit}>
                    <label className="formLabel">
                        <strong> Message: </strong>


                        <textarea className="textBox"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="15"
                            cols="50"
                            placeholder="Please leave your feedback here..."
                        />
                    </label>

                    <button className="submitButton" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;