import { useState } from 'react';
import registerContactUs from './registerContactUs.js';
import getUserInfo from '../authentication/getUserInfo.js';
import ModalWindow from '../common/ModalWindow.jsx';
import { getDate } from '../common/getTodaysDate.js';

function ContactUs({ currentUser, message, setMessage, showModalWindow, setShowModalWindow }) {
    const userInformation = getUserInfo(currentUser);

    let [formData, setFormData] = useState({
        id: userInformation.userId,
        name: userInformation.userFirst + ' ' + userInformation.userLast,
        email: userInformation.userEmail,
        contactMessage: "",

    });

    const handleChange = (e) => {
        const value = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            contactMessage: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        if (!formData.contactMessage) {
            setMessage("Please be sure to leave us a message!");
            setShowModalWindow(true);
            return;
        }

        registerContactUs(userInformation.userId, formData.contactMessage);

        setMessage(`Submitted. Thank you!`);
        setShowModalWindow(true);

        setFormData((prevData) => ({
            ...prevData,
            contactMessage: "",
        }));

    };

    return (
        <div className="main">
            <div className="ContactUs">

                <h1>Contact Us</h1>

                {showModalWindow && (
                    <ModalWindow
                        message={message}
                        onClose={() => setShowModalWindow(false)}>
                    </ModalWindow>
                )}

                <p><strong> Date: </strong>{getDate()}</p>
                <p><strong> Name: </strong>{formData.name}</p>
                <p><strong> Email: </strong>{formData.email}</p>

                <form onSubmit={handleSubmit}>
                    <label className="formLabel">
                        <strong> Message: </strong>


                        <textarea className="textBox"
                            name="contactMessage"
                            value={formData.contactMessage}
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