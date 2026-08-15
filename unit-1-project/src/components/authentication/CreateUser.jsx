import React from 'react';
import { useState } from 'react';
import createUser from './CreateUser.js';
import validateEmail from './validateEmail.js';
import { useNavigate, Link } from 'react-router';
import validateUser from './validateUser.js';
import { onyxUsers } from '../common/userGlobals.js';


export default function CreateUser() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_first: "",
    user_last: "",
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
    if (!formData.user_first || !formData.user_last || !formData.user_email || !formData.user_password) {
      alert("Please fill out all fields.");
      return;
    }

    if (validateEmail(formData.user_email)) {
      createUser(formData.user_first, formData.user_last, formData.user_email, formData.user_password);
      alert("Account created successfully!");
      setFormData({ user_first: "", user_last: "", user_email: "", user_password: "" });

      navigate('/Mood');

    } else {
      alert("Email address already registered. Please try again");
      console.log(onyxUsers);
      setFormData({ user_first: formData.user_first, user_last: formData.user_last, user_email: "", user_password: "" });
      return;
    }

  };

  return (
    <div className="CreateUserr">
      <br />
      <h2>Welcome to Onyx Reflections!</h2>

      <form onSubmit={handleSubmit}>
        <label>
          First name:
          <input
            type="text"
            name="user_first"
            value={formData.user_first}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

        <label>
          Last name:
          <input
            type="text"
            name="user_last"
            value={formData.user_last}
            onChange={handleChange}
          />
        </label>

        <br />
        <br />

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
      <p>Already have an account? <Link to="/Login">Log in </Link></p>
    </div>
  );
}