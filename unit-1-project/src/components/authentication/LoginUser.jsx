import { useState } from 'react';
import validateUser from './validateUser.js';
import { useNavigate, Link } from 'react-router';

function LoginUser({ setCurrentUser }) {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user_email: "",
        user_password: "",
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
        if (!formData.user_email || !formData.user_password) {
            alert("Please fill out all fields.");
            return;
        }

        const userVerified = validateUser(formData.user_email, formData.user_password);

        if (userVerified) {
            alert(`Submitted. Welcome, ${userVerified.user_first}!`);
            setCurrentUser(userVerified.user_id);
            setFormData({
                user_email: "",
                user_password: "",
            });

            navigate('/Mood');
        } else {
            alert("Invalid email or password.");
            setFormData({
                user_email: "",
                user_password: "",
            });
        }
    };

    return (
        <div className="LoginUser">
            <br />
            <h3>Log In</h3>

            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                    />
                </label>

                <br />
                <br />

                <label>
                    Password:
                    <input
                        type="password"
                        name="user_password"
                        value={formData.user_password}
                        onChange={handleChange}
                    />
                </label>

                <br />
                <br />

                <button type="submit">Submit</button>
            </form>

            <br />
            <p>Don't have an account? <Link to="/create-account">Register now!</Link></p>
        </div>
    );
}

export default LoginUser;