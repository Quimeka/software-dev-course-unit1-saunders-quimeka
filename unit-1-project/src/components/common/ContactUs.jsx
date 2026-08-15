import { useState } from 'react';
import validateUser from '../authentication/validateUser';
import { useNavigate, Link } from 'react-router';
import contactUs from './contactus.js';
import getUserInfo from '../authentication/getUserInfo';

function ContactUs({ currentUser }) {

    const navigate = useNavigate();

    const userInformation = getUserInfo(currentUser);


    const [formData, setFormData] = useState({
        id: userInformation.user_id,
        name: userInformation.user_first + ' ' + userInformation.user_last,
        email: userInformation.user_email,
        message: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(`Updating ${name}:`, value);

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.message) {
            alert("Please be sure to leave us a message!");
            return;
        }

        contactUs(formData.id, formData.name, formData.email, formData.message);

        alert(`Submitted. Thank you, ${userInformation.user_first}!`);
        setFormData({
            id: userInformation.user_id,
            name: userInformation.user_first + ' ' + userInformation.user_last,
            email: userInformation.user_email,
            message: "",
        });

    };

    return (
        <div className="ContactUs">
            <br />
            <h1>Contact Us</h1>
            <p><strong> Name: </strong>{formData.name}</p>
            <p><strong> Email: </strong>{formData.email}</p>

            <form onSubmit={handleSubmit}>
                <label>
                    <strong> Message: </strong>
                    <br />
                    <br />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="15"
                        cols="50"
                        placeholder="Please leave your feedback here..."
                    />
                </label>

                <br />
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ContactUs;