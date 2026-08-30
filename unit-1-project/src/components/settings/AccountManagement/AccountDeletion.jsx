import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import '../settings.css';
import deleteUser from '../../authentication/deleteUser.js';
import getUserInfo from '../../authentication/getUserInfo.js';
import { loggedJournalEntries } from '../../common/userGlobals.js';

function AccountDeletion({ currentUser, setCurrentUser, firstName, setMessage, setShowModalWindow, setJournalUpdate }) {
    const navigate = useNavigate();

    const userInformation = getUserInfo(currentUser);
    const [accountDelete, setAccountDelete] = useState(false);
    const [isSetForDeletion, setIsSetForDeletion] = useState(false);


    let [formData, setFormData] = useState({
        deleteAccount: ""
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

    const handleDeletion = (e) => {
        setIsSetForDeletion((prev) => !prev);
    }

    //work deletion process with user, confirm deletion, and update global props (journal and user logs)
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        if (formData.deleteAccount.trim() !== "DELETE") {
            setMessage(`Please enter the word "DELETE" to continue with account deletion.`)
            setShowModalWindow(true);
            return;
        }

        setFormData({ deleteAccount: "" });

        const isDeleted = deleteUser(currentUser);

        if (isDeleted) {
            setMessage(`We're sad to see you go, but wish you well ${firstName}!`);
            setShowModalWindow(true);
            setJournalUpdate([...loggedJournalEntries]);
            setCurrentUser(null);
        } else {
            setMessage(`We're experiencing technical difficulties, ${firstName}. Please try again later or contact us directly.`);
            setShowModalWindow(true);
        }

    }
    //display text box for user deletion
    return (
        <div>
            <div>
                <h3> Account Deletion Information </h3>
                <label className="switch">
                    <input
                        type="checkbox"
                        name="subscribe"
                        checked={isSetForDeletion}
                        onChange={handleDeletion}
                    />
                    <span className="slider round"></span>
                </label>
                <span className="switchText">
                    {isSetForDeletion ? " Preparing to Delete Account" : "Delete Account Now"}
                </span>
            </div>

            {isSetForDeletion && (
                <div>
                    <div className="AccountDeletion">
                        <h3>Account Deletion</h3>
                        <p>Deleting your account is permanent and cannot be undone.You will immediately lose access to your account and everything inside it. The following information will be permanently deleted from our servers and cannot be recovered by you or our customer support team:</p>
                        <ul>
                            <li>All journal entries and written text.</li>
                            <li>All mood tracking data and history.</li>
                            <li>All tags, prompts, and custom settings </li>
                        </ul>
                        <p>If you want to keep your data, please contact us via the Contact Us Page. </p>
                        <p>If you proceed, everything is gone forever.</p>
                    </div >
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label className="formLabel">
                                Please type the word "DELETE" to proceed:
                                <input
                                    className="formInput"
                                    type="text"
                                    name="deleteAccount"
                                    value={formData.deleteAccount}
                                    onChange={handleChange}
                                />
                            </label>
                            <button className="submitButton" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )

}

export default AccountDeletion
