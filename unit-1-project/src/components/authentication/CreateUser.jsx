import React from 'react';
import { useState } from 'react';
import createUser from './CreateUser.js';
import isEmailAvailable from './isEmailAvailable.js';
import { useNavigate, Link } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';
import { CREATE_USER_FIELDS } from '../common/userGlobals.js';


export default function CreateUser({ isSubscribed, setIsSubscribed, setCurrentUser, firstName, setFirstName, message, setMessage, showModalWindow, setShowModalWindow }) {
  const navigate = useNavigate();

  const [goNext, setGoNext] = useState(false);

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
    setMessage("");
    //check for any empty required fields and provide an error message to the user. 
    if (!formData.userFirst.trim() || !formData.userLast.trim() || !formData.userEmail.trim() || !formData.userPassword.trim()) {
      setMessage("Please fill out all fields.");
      setShowModalWindow(true);
      return;
    }

    const isFirstNameValid = /^[A-Za-z]+$/.test(formData.userFirst.trim());
    const isLastNameValid = /^[A-Za-z]+$/.test(formData.userLast.trim());

    if (!isFirstNameValid && isLastNameValid) {
      setMessage("Please enter a valid first name");
      setShowModalWindow(true);
      setFormData({ userFirst: "", userLast: formData.userLast, userEmail: formData.userEmail, userPassword: "" });
      return;

    }

    if (!isLastNameValid && isFirstNameValid) {
      setMessage("Please  enter a valid last name.");
      setShowModalWindow(true);
      setFormData({ userFirst: formData.userFirst, userLast: "", userEmail: formData.userEmail, userPassword: "" });
      return;
    }
    if (!isFirstNameValid && !isLastNameValid) {
      setMessage("Please  enter a valid first and last name.");
      setShowModalWindow(true);
      setFormData({ userFirst: "", userLast: "", userEmail: formData.userEmail, userPassword: "" });
      return;
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail.trim());

    if (!isEmailValid) {
      setMessage("Please  enter a valid email address.");
      setShowModalWindow(true);
      setFormData({ userFirst: formData.userFirst, userLast: formData.userLast, userEmail: "", userPassword: "" });
      return;
    }

    //check for existing user account. and provide an error message to the user. 
    if (!isEmailAvailable(formData.userEmail)) {
      setMessage("Email address already registered. Please try again.");
      setShowModalWindow(true);
      setFormData({ userFirst: formData.userFirst, userLast: formData.userLast, userEmail: "", userPassword: "" });
      return;
    }
    //check for valid password for security purposes.
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formData.userPassword.trim());

    if (!isPasswordValid) {
      setMessage("Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, and a number.");
      setShowModalWindow(true);
      setFormData({ userFirst: formData.userFirst, userLast: formData.userLast, userEmail: formData.userEmail, userPassword: "" });
      return;
    }

    //create new user account, set prop values for application use. 
    const newUserCreated = createUser(formData.userFirst.trim(), formData.userLast.trim(), formData.userEmail.trim(), formData.userPassword.trim());
    setCurrentUser(newUserCreated);
    setIsSubscribed(newUserCreated.userSubscribed);
    const userFirstName = formData.userFirst.trim();
    setFirstName(userFirstName);
    setMessage(`Welcome to the Onxy Reflections community, ${userFirstName}!`);
    setGoNext(true);
    setShowModalWindow(true);
    setFormData({ userFirst: "", userLast: "", userEmail: "", userPassword: "" });
  }

  return (
    <div className="CreateUser">
      <h3>Welcome to Onyx Reflections!</h3>

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


      <p>Already have an account? <Link className="link" to="/Login">Log in </Link></p>
    </div>
  );
}