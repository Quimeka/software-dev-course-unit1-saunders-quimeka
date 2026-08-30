import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import getUserInfo from '../authentication/getUserInfo.js';
import updateUserPassword from '../authentication/updateUserPassword.js';
import ModalWindow from '../common/ModalWindow.jsx';
import './settings.css';

function SecurityPrivacy({ currentUser, setCurrentUser, message, setMessage, showModalWindow, setShowModalWindow }) {
    const navigate = useNavigate();

    const userInformation = getUserInfo(currentUser);

    let [formData, setFormData] = useState({
        userPassword: "",
        userNewPassword: "",
        userNewPassword2: ""

    });

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
            return;
        }
    }, [currentUser, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    //confirm user by requiring current password, ensure user knows what the new password is by requiring two entries. 
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        const currentInputPw = formData.userPassword || "";
        const newPw1 = formData.userNewPassword || "";
        const newPw2 = formData.userNewPassword2 || "";
        const currentPw = userInformation?.userPassword || "";

        if (!currentInputPw.trim() || !newPw1.trim() || !newPw2.trim()) {
            setMessage("Please fill in all fields to update your password.");
            setShowModalWindow(true);
            return;
        }

        if (currentInputPw.trim() !== currentPw.trim()) {
            setMessage("Current password was incorrect. Please try again.");
            setShowModalWindow(true);
            setFormData({ userPassword: "", userNewPassword: newPw1, userNewPassword2: newPw2 });
            return;
        }

        if (newPw1.trim() !== newPw2.trim()) {
            setMessage("New password does not match. Please try again.");
            setShowModalWindow(true);
            setFormData({ userPassword: currentInputPw, userNewPassword: "", userNewPassword2: "" });
            return;
        }

        const userWithUpdatedPassword = updateUserPassword(userInformation.userId, newPw2);
        setCurrentUser(userWithUpdatedPassword);

        setFormData({ userPassword: "", userNewPassword: "", userNewPassword2: "" });
        setMessage("Password successfully updated!");
        setShowModalWindow(true);
    }

    //display password reset form; will work to implement two-factor authentication in unit 2.
    return (
        <div className="main">

            {showModalWindow && (
                <ModalWindow
                    message={message}
                    onClose={() => setShowModalWindow(false)}>
                </ModalWindow>
            )}

            <h3> Security & Privacy</h3>

            <h4>Password Management </h4>

            <form onSubmit={handleSubmit}>
                <label className="formLabel">
                    Current Password:
                    <input
                        className="formInput"
                        type="password"
                        name="userPassword"
                        value={formData.userPassword}
                        onChange={handleChange}
                    />
                </label>

                <label className="formLabel">
                    New Password:
                    <input
                        className="formInput"
                        type="password"
                        name="userNewPassword"
                        value={formData.userNewPassword}
                        onChange={handleChange}
                    />
                </label>

                <label className="formLabel">
                    New Password Confirmation:
                    <input
                        className="formInput"
                        type="password"
                        name="userNewPassword2"
                        value={formData.userNewPassword2}
                        onChange={handleChange}
                    />
                </label>

                <button className="submitButton" type="submit">Submit</button>
            </form>

            <h4>Two-Factor Authentication </h4>
            <p><em>Coming soon...</em></p>

        </div>
    );

}
export default SecurityPrivacy;
