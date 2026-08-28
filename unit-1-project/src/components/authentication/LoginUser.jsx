import { useState } from 'react';
import verifyUserLogin from './verifyUserLogin.js';
import { useNavigate, Link } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';

function LoginUser({ isSubscribed, setIsSubscribed, currentUser, setCurrentUser, firstName, setFirstName, message, setMessage, showModalWindow, setShowModalWindow }) {
    const navigate = useNavigate();

    const [goNext, setGoNext] = useState(false);
    const [formData, setFormData] = useState({
        userEmail: "",
        userPassword: "",
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
        //check user input and provide an error message to the user. 
        if (!formData.userEmail || !formData.userPassword) {
            setMessage("Please fill out all fields.");
            setShowModalWindow(true);
            return;
        }

        //check for valid email address
        const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail.trim());

        if (!isEmailValid) {
            setMessage("Please  enter a valid email address.");
            setShowModalWindow(true);
            return;

        }

        //check for login credentials and provide an error message to the user. 
        const loggedUser = verifyUserLogin(formData.userEmail, formData.userPassword);

        if (!loggedUser) {
            setMessage("Invalid email or password.");
            setShowModalWindow(true);
            return;
        }

        //log in the user, set prop values for application use. 
        setCurrentUser(loggedUser.userId);
        setIsSubscribed(loggedUser.userSubscribed);
        const userFirstName = loggedUser.userFirst;
        setFirstName(userFirstName);
        setMessage(`Welcome back, ${userFirstName}!`);
        setGoNext(true);
        setShowModalWindow(true);

        setFormData({
            userEmail: "",
            userPassword: "",
        });
    }

    return (
        <div className="LoginUser">
            <h3>Log In</h3>

            {showModalWindow && !goNext && (
                <ModalWindow
                    message={message}
                    onClose={() => setShowModalWindow(false)}>
                </ModalWindow>
            )}

            {showModalWindow && goNext && (
                <ModalWindow
                    message={message}
                    onClose={() => (setShowModalWindow(false), navigate('/Mood'))}>
                </ModalWindow>
            )}

            <form onSubmit={handleSubmit}>
                <label className="formLabel">
                    Email:
                    <input
                        className="formInput"
                        type="email"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={handleChange}
                    />
                </label>

                <label className="formLabel">
                    Password:
                    <input
                        className="formInput"
                        type="password"
                        name="userPassword"
                        value={formData.userPassword}
                        onChange={handleChange}
                    />
                </label>

                <button className="submitButton" type="submit">Submit</button>
            </form>

            <p>Don't have an account? <Link className="link" to="/create-account">Register now!</Link></p>
        </div>
    );
}

export default LoginUser;