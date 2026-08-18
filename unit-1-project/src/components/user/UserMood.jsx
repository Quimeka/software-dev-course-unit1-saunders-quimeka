import { useState, useEffect } from 'react';
import { getUserFirstName } from './getUserName.js';
import { useNavigate } from 'react-router';
import SubmitGoBack from '../common/SubmitGoBack.jsx';
import ModalWindow from '../common/ModalWindow.jsx';
import { MOOD_OPTIONS } from '../common/userGlobals.js';


function UserMood({ currentUser, moodData, setMoodData }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showModalWindow, setShowModalWindow] = useState(false)

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);


  const handleChange = (e) => {
    const chosenMood = e.target.value;
    setMoodData(chosenMood);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!moodData) {
      setErrorMessage(`Try again. I'd like to know how you're doing today, ${getUserFirstName(currentUser)}!`);
      setShowModalWindow(true);
      return;
    }
    navigate('/Depth');
  };


  return (
    <div className="main">
      <div className="UserMood">

        {showModalWindow && (
          <ModalWindow
            message={errorMessage}
            onClose={() => setShowModalWindow(false)}>
          </ModalWindow>
        )}

        <form className="form" onSubmit={handleSubmit}>

          <h3 id="moodLine" >How are you feeling today, {getUserFirstName(currentUser)}?</h3>

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
              </label>
            ))}

          <SubmitGoBack resetInput={() => setMoodData(null)} />
        </form>
      </div>
    </div>
  );
}

export default UserMood;