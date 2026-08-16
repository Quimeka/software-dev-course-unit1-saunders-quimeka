import { useState } from 'react';
import verifyUserLogin from './verifyUserLogin.js';
import { useNavigate, Link } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';

function LoginUser({ setCurrentUser }) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [showModalWindow, setShowModalWindow] = useState(false)
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
        if (!formData.userEmail || !formData.userPassword) {
            setErrorMessage("Please fill out all fields.");
            setShowModalWindow(true);
            return;
        }

        const loggedUser = verifyUserLogin(formData.userEmail, formData.userPassword);

        if (!loggedUser) {
            setErrorMessage("Invalid email or password.");
            setShowModalWindow(true);
            return;
        }

        setCurrentUser(loggedUser.userId);

        setFormData({
            userEmail: "",
            userPassword: "",
        });
        navigate('/Mood');
    }

    return (
        <div className="LoginUser">
            <h3>Log In</h3>

            {showModalWindow && (
                <ModalWindow
                    message={errorMessage}
                    onClose={() => setShowModalWindow(false)}>
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

            <p>Don't have an account? <Link to="/create-account">Register now!</Link></p>
        </div>
    );
}

export default LoginUser;