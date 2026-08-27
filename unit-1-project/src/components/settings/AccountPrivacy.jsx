import { useState, useEffect } from 'react';
import { useNavigate, Link, Outlet } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';
import isEmailAvailable from '../authentication/isEmailAvailable.js';
import getUserInfo from '../authentication/getUserInfo.js';
import updateUser from '../authentication/updateUser.js';
import Subscription from './Subscription.jsx';
import AccountDeletion from './AccountDeletion.jsx';
import { CREATE_USER_FIELDS, onyxUsers } from '../common/userGlobals.js';
import './settings.css';

function AccountPrivacy({ isSubscribed, setIsSubscribed, currentUser, setCurrentUser, firstName, setFirstName, message, setMessage, showModalWindow, setShowModalWindow, setJournalUpdate }) {
    const navigate = useNavigate();

    const userInformation = getUserInfo(currentUser);
    const [accountDelete, setAccountDelete] = useState(false);

    let [formData, setFormData] = useState({
        userFirst: userInformation?.userFirst || "",
        userLast: userInformation?.userLast || "",
        userEmail: userInformation?.userEmail || "",
    });

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        //check for any empty required fields and provide an error message to the user. 
        if (!formData.userFirst || !formData.userLast || !formData.userEmail) {
            setMessage("Please re-populate all of your account information.");
            setShowModalWindow(true);
            return;
        }
        //check for existing user account. and provide an error message to the user. 
        if (formData.userEmail.trim() !== userInformation.userEmail.trim()) {
            if (!isEmailAvailable(formData.userEmail)) {
                setMessage("Email address already registered. Please try again.");
                setShowModalWindow(true);
                setFormData({ userFirst: formData.userFirst, userLast: formData.userLast, userEmail: "" });
                return;
            }
        }
        //ensure user information is updated for use within global props and within array for retrieval and accuracy purposes.
        const updateUserInformation = updateUser(userInformation.userId, formData.userFirst.trim(), formData.userLast.trim(), formData.userEmail.trim());
        setCurrentUser(updateUserInformation);
        const userFirstName = formData.userFirst.trim();
        setFirstName(userFirstName);

        setMessage(`Update Successful, ${formData.userFirst.trim()}!`);
        setShowModalWindow(true);
    }
    //allow user to update account information, subscribe, and/or delete account
    return (
        <div className="main">

            {showModalWindow && (
                <ModalWindow
                    message={message}
                    onClose={() => setShowModalWindow(false)}>
                </ModalWindow>
            )}

            <form onSubmit={handleSubmit}>

                <h3> Account Information </h3>
                <p> Please feel free to update your personal information:</p>

                {CREATE_USER_FIELDS.slice(0, 3).map((field) => (
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
            < Subscription isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} currentUser={currentUser} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
            <AccountDeletion isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} currentUser={currentUser} setCurrentUser={setCurrentUser} firstName={firstName} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} setJournalUpdate={setJournalUpdate}/>
        </div >
    );
}

export default AccountPrivacy;
