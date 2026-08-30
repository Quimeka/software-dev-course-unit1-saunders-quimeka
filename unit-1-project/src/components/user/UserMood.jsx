import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import SubmitGoBack from '../common/SubmitGoBack.jsx';
import ModalWindow from '../common/ModalWindow.jsx';
import { MOOD_OPTIONS } from '../common/userGlobals.js';
import getUserInfo from '../authentication/getUserInfo.js';


function UserMood({ isSubscribed, setIsSubscribed, currentUser, moodData, setMoodData, firstName, message, setMessage, showModalWindow, setShowModalWindow }) {
  const navigate = useNavigate();


  useEffect(() => {
    if (!currentUser) {
      navigate('/');
      return;
    }

    const subscription = getUserInfo(currentUser).userSubscribed;
    setIsSubscribed(subscription);

  }, [currentUser, navigate, setIsSubscribed]);

  useEffect(() => {
    setMoodData(null);
  }, [setMoodData]);

  const handleChange = (e) => {
    const chosenMood = e.target.value;
    setMoodData(chosenMood);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //check user input and provide an error message to the user. 
    if (!moodData) {
      setMessage(`Try again. I'd like to know how you're doing today, ${firstName}!`);
      setShowModalWindow(true);
      return;
    }
    navigate('/Depth');
  };

  //display mood options to user and process input via submittal.
  return (
    <div className="main">
      <div className="UserMood">

        {showModalWindow && (
          <ModalWindow
            message={message}
            onClose={() => setShowModalWindow(false)}>
          </ModalWindow>
        )}

        <form className="form" onSubmit={handleSubmit}>

          <h3 id="moodLine" >How would you rate your overall emotional state right now, {firstName}?</h3>

          {MOOD_OPTIONS.map((mood) => (
            <label key={mood.value} className="formLabel">
              <input
                className="radioButton"
                type="radio"
                name="userMood"
                value={mood.value}
                checked={moodData === mood.value}
                onChange={handleChange}
              />
              <span> {mood.moodLabel}</span>
              <p className="ButtonDescription">
                {mood.description}
              </p>
            </label>
          ))}

          <SubmitGoBack resetInput={() => setMoodData(null)} />
        </form>
      </div>
    </div>
  );
}

export default UserMood;