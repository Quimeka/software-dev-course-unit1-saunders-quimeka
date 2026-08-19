import React from 'react';
import { useState } from 'react';
import createUser from './CreateUser.js';
import isEmailAvailable from './isEmailAvailable.js';
import { useNavigate, Link } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';
import { CREATE_USER_FIELDS } from '../common/userGlobals.js';


export default function CreateUser({ setCurrentUser }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showModalWindow, setShowModalWindow] = useState(false)

  const [formData, setFormData] = useState({
    userFirst: "",
    userLast: "",
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
    setErrorMessage("");

    if (!formData.userFirst || !formData.userLast || !formData.userEmail || !formData.userPassword) {
      setErrorMessage("Please fill out all fields.");
      setShowModalWindow(true);
      return;
    }

    if (!isEmailAvailable(formData.userEmail)) {
      setErrorMessage("Email address already registered. Please try again.");
      setShowModalWindow(true);
      setFormData({ userFirst: formData.userFirst, userLast: formData.userLast, userEmail: "", userPassword: "" });
      return;
    }

    const newUserCreated = createUser(formData.userFirst, formData.userLast, formData.userEmail, formData.userPassword);
    setCurrentUser(newUserCreated);
    setFormData({ userFirst: "", userLast: "", userEmail: "", userPassword: "" });
    navigate('/Mood');
  }

  return (
    <div className="CreateUser">
      <h3>Welcome to Onyx Reflections!</h3>

      {showModalWindow && (
        <ModalWindow
          message={errorMessage}
          onClose={() => setShowModalWindow(false)}>
        </ModalWindow>
      )}

      <form onSubmit={handleSubmit}>

        {CREATE_USER_FIELDS.map((field) => (
          <label className="formLabel" key={field.name}>
            {field.label}
            <input
              className="formInput"
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
          </label>))}

        <button className="submitButton" type="submit">Submit</button>
      </form>


      <p>Already have an account? <Link to="/Login">Log in </Link></p>
    </div>
  );
}