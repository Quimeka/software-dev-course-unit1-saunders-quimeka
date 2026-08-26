import { useState, useEffect } from 'react';
import { useNavigate, Link, Outlet } from 'react-router';
import ModalWindow from '../common/ModalWindow.jsx';
import './settings.css';
import updateSubscription from './updateSubscription.js';
import getUserInfo from '../authentication/getUserInfo.js';

function Subscription({ isSubscribed, setIsSubscribed, currentUser, firstName, setFirstName, message, setMessage, showModalWindow, setShowModalWindow }) {
    const navigate = useNavigate();

    const userInformation = getUserInfo(currentUser);
    //Populate form based on user data
    if(!userInformation.userSubscribed){
            const [isSubscribedMember, setIsSubscribedMember] = useState(false);
    } else{
            const [isSubscribedMember, setIsSubscribedMember] = useState(true); 
    }

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    //prepare for CC information (will replace later with CC validator and valid payment form)
    let [formData, setFormData] = useState({
        cardholder: userInformation? userInformation.userFirst + ' ' + userInformation.userLast : "",
        number: "",
        exp: "",
        cvv: "",
        zip: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubscription = (e) => {
        setIsSubscribed((prev) => !prev);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        if (!formData.cardholder || !formData.number || !formData.exp || !formData.zip || !formData.cvv) {
            setMessage("Please be sure to complete the card information for processing.");
            setShowModalWindow(true);
            return;
        }

        const userRegistered = updateSubscription(currentUser);

        if (userRegistered) {
            setMessage(`Submitted for processing. Thank you!`);
            setIsSubscribedMember(true);
            setShowModalWindow(true);


            setFormData((prevData) => ({
                cardholder: "",
                number: "",
                exp: "",
                cvv: "",
                zip: "",

            }))

        }
    };
    //allow user to subscribe to premium user status; more to come. Can't unsubscribe atm, but will work on it in unit2.
    return (
        <div>
            <div>
                <h3> Subscription Information </h3>
                <label className="switch">
                    <input
                        type="checkbox"
                        name="subscribe"
                        checked={isSubscribed}
                        onChange={handleSubscription}
                    />
                    <span className="slider round"></span>
                </label>
                <span className="switchText">
                    {isSubscribed ? " Subscribe" : "Subscribe Now!"}
                </span>
            </div>

            {isSubscribed && !isSubscribedMember && (
                <form className="billing-form" onSubmit={handleSubmit}>
                    <h3>Billing Information</h3>
                    <label className="formLabel">
                        Please enter the cardholder name as it appears on the card:
                        <input
                            className="formInput"
                            name="cardholder"
                            type="text"
                            value={formData.cardholder}
                            placeholder={formData.cardholder}
                            onChange={handleChange}
                            required />
                    </label>
                    Card Number:
                    <label className="formLabel">
                        <input
                            className="formInput"
                            name="number"
                            value={formData.number}
                            type="text"
                            placeholder="9999 9999 9999 9999"
                            onChange={handleChange}
                            required />
                    </label>
                    <label className="formLabel">
                        Expiration Date:
                        <input
                            className="formInput"
                            name="exp"
                            value={formData.exp}
                            type="text"
                            placeholder="MM/YYYY"
                            onChange={handleChange}
                            required />
                    </label>
                    <label className="formLabel">
                        CVV Code:
                        <input
                            className="formInput"
                            name="zip"
                            value={formData.zip}
                            type="text"
                            placeholder="12345"
                            onChange={handleChange}
                            required />
                    </label>
                    <label className="formLabel">
                        Billing Zip Code:
                        <input
                            className="formInput"
                            name="cvv"
                            value={formData.cvv}
                            type="text"
                            placeholder="987"
                            onChange={handleChange}
                            required />
                    </label>
                    <button className="submitButton" type="submit">Submit Subscription Change</button>

                </form>
            )}

            {isSubscribed && isSubscribedMember && (
                <div>
                    <p> Thank you for being a subscribed member!</p>
                </div>
            )}

        </div>
    );

}

export default Subscription;
