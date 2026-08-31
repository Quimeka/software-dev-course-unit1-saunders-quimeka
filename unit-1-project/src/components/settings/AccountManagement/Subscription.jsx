import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import '../settings.css';
import registerSubscription from './SubscriptionManagement/registerSubscription.js';
import cancelSubscription from './SubscriptionManagement/cancelSubscription.js';
import getSubscriptionInfo from './SubscriptionManagement/getSubscriptionInfo.js';
import getUserInfo from '../../authentication/getUserInfo.js';
import validateExpirationDate from './SubscriptionManagement/validateExpirationDate.js';

function Subscription({ isSubscribed, setIsSubscribed, currentUser, firstName, setMessage, setShowModalWindow }) {
    const navigate = useNavigate();
    const userSubscriptionInformation = getSubscriptionInfo(currentUser);
    const userInformation = getUserInfo(currentUser);
    //Populate form based on user data
    const [subscribedButton, setSubscribedButton] = useState((false));
    const [subscriptionFee, setSubscriptionFee] = useState((userSubscriptionInformation?.fee || "0.00"));
    const [subscriptionState, setSubscriptionState] = useState((userSubscriptionInformation?.status || "free"));
    const [subscriptionStartDate, setSubscriptionStartDate] = useState((userSubscriptionInformation?.startdate || "Not enrolled"))

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
            return;
        }

        const subscription = getUserInfo(currentUser).userSubscribed;
        setIsSubscribed(subscription);

    }, [currentUser, navigate, setIsSubscribed]);

    let [subscriptionFormData, setSubscriptionFormData] = useState({
        cancel: ""
    });

    //prepare for CC information (will replace later with CC validator and valid payment form)
    let [cardFormData, setCardFormData] = useState({
        cardholder: userInformation ? userInformation.userFirst + ' ' + userInformation.userLast : "",
        number: "",
        exp: "",
        cvv: "",
        zip: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCardFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubChange = (e) => {
        const { name, value } = e.target;
        setSubscriptionFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubscriptionButton = (e) => {
        e.preventDefault();
        setSubscribedButton((prev) => !prev);
    }

    const handleNewSubscriptionSubmit = (e) => {
        e.preventDefault();
        setMessage("");

        //Ensure everything is filled in
        if (!cardFormData.cardholder.trim() || !cardFormData.number.trim() || !cardFormData.exp.trim() || !cardFormData.zip.trim() || !cardFormData.cvv.trim()) {
            setMessage("Please be sure to complete the card information for processing.");
            setShowModalWindow(true);
            return;
        }

        //Cardholder name validation
        if (!/^[a-zA-Z\s\-\']{2,26}$/.test(cardFormData.cardholder.trim())) {
            setMessage("Please ensure your cardholder name is correct.");
            setShowModalWindow(true);
            return;
        }

        // Card number length validation
        if (!/^\d{13,19}$/.test(cardFormData.number.replace(/\s+/g, ''))) {
            setMessage("Please ensure your card number has between 13 and 19 digits.");
            setShowModalWindow(true);
            return;
        }

        //Expiration date validation
        if (!validateExpirationDate(cardFormData.exp)) {
            setMessage("Please ensure your Expiration date is accurate.");
            setShowModalWindow(true);
            return;
        }

        //Zip code validation
        if ((Number(cardFormData.zip.trim()) < 501 || Number(cardFormData.zip.trim()) > 99950) || cardFormData.zip.trim().length < 5) {
            setMessage("Please ensure your Zip code is accurate (between 00501 to 99950).");
            setShowModalWindow(true);
            return;
        }

        //CVV validation
        if (!/^\d{3}$/.test(cardFormData.cvv.replace(/\s+/g, ''))) {
            setMessage("Please ensure your CVV is accurate");
            setShowModalWindow(true);
            return;
        }

        if (!isSubscribed) {
            const subscriptionStatus = registerSubscription(currentUser);
            setSubscriptionStartDate(subscriptionStatus.startdate);
            setSubscriptionFee(subscriptionStatus.fee);
            setSubscriptionState(subscriptionStatus.status);
            setIsSubscribed(true);
            setMessage(`Submitted for processing. Thank you!`);
            setShowModalWindow(true);

            setCardFormData((prevData) => ({
                cardholder: "",
                number: "",
                exp: "",
                cvv: "",
                zip: "",

            }))

        }
    };

    const handleSubscriptionCancelSubmit = (e) => {
        e.preventDefault();
        if (subscriptionFormData.cancel.trim() !== "CANCEL") {
            setMessage(`Please enter the word "CANCEL" to continue with cancel subscription.`)
            setShowModalWindow(true);
            return;
        }

        //run cancellation, update user to free account + $0.00 fees.
        const cancelStatus = cancelSubscription(currentUser);

        //confirm cancelation status and update props for application use.
        if (cancelStatus.status === "free") {
            setSubscriptionFee(cancelStatus.fee);
            setSubscriptionState(cancelStatus.status);
            setSubscriptionFormData({ cancel: "" });
            setIsSubscribed(false);

            if (!isSubscribed) {
                setMessage(`We're sad to see you change your subscription, but hope you enjoy the free version, ${firstName}!`);
                setShowModalWindow(true);
            }

            return;
        }

        setMessage(`We're experiencing technical difficulties, ${firstName}. Please try again later or contact us directly.`);
        setShowModalWindow(true);

    }

    //allow user to subscribe to premium user status; more to come. Can't unsubscribe atm, but will work on it in unit2.
    return (
        <div>
            <div>
                <h3> Subscription Information </h3>
                <label className="switch">
                    <input
                        type="checkbox"
                        name="subscribe"
                        checked={subscribedButton}
                        onChange={handleSubscriptionButton}
                    />
                    <span className="slider round"></span>
                </label>

                {isSubscribed && (
                    <div>
                        <h4 className="switchText">
                            {subscribedButton ? " Cancel Subscription" : "Maintain Subscription"}
                        </h4>
                        <p> <em>Enrollment date:</em> {subscriptionStartDate} </p>
                        <p> <em>Monthly subscription cost:</em> ${subscriptionFee}.</p>
                    </div>
                )}

                {!isSubscribed && (
                    <span className="switchText">
                        {subscribedButton ? " Subscribe Now!" : "Subscription"}
                    </span>
                )}
            </div>

            {subscribedButton && !isSubscribed && (
                <form className="billing-form" onSubmit={handleNewSubscriptionSubmit}>
                    <h3>Billing Information</h3>
                    <label className="formLabel">
                        Please enter the cardholder name as it appears on the card:
                        <input
                            className="formInput"
                            name="cardholder"
                            type="text"
                            value={cardFormData.cardholder}
                            placeholder={cardFormData.cardholder}
                            onChange={handleChange}
                            required />
                    </label>

                    <label className="formLabel">
                        Card Number:
                        <input
                            className="formInput"
                            name="number"
                            value={cardFormData.number}
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
                            value={cardFormData.exp}
                            type="text"
                            placeholder="MM/YYYY"
                            onChange={handleChange}
                            required />
                    </label>

                    <label className="formLabel">
                        CVV:
                        <input
                            className="formInput"
                            name="cvv"
                            value={cardFormData.cvv}
                            type="text"
                            placeholder="987"
                            onChange={handleChange}
                            required />
                    </label>

                    <label className="formLabel">
                        Billing Zip Code:
                        <input
                            className="formInput"
                            name="zip"
                            value={cardFormData.zip}
                            type="text"
                            placeholder="12345"
                            onChange={handleChange}
                            required />
                    </label>
                    <button className="submitButton" type="submit">Submit Subscription Change</button>
                </form>
            )}

            {subscribedButton && isSubscribed && (
                <div>
                    <p><strong>Thank you for being a subscribed member!</strong> </p>
                    <p> Would you like to cancel your subscription? </p>
                    <p>If so, please complete the below form:</p>
                    <div>
                        <form onSubmit={handleSubscriptionCancelSubmit}>
                            <label className="formLabel">
                                Please type the word "CANCEL" to proceed:
                                <input
                                    className="formInput"
                                    type="text"
                                    name="cancel"
                                    value={subscriptionFormData.cancel}
                                    onChange={handleSubChange}
                                />
                            </label>
                            <button className="submitButton" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div >
    );


}

export default Subscription;
