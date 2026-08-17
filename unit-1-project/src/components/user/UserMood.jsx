import { useState, useEffect } from 'react';
import { getUserFirstName } from './getUserName.js';
import { useNavigate } from 'react-router';
import SubmitGoBack from '../common/SubmitGoBack.jsx';
import ModalWindow from '../common/ModalWindow.jsx';


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
      setErrorMessage(`Please provide a response to the question,${getUserFirstName(currentUser)} .`);
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

          <label className="formLabel">
            <input
              className="radioButton"
              type="radio"
              name="userMood"
              value="1"
              checked={moodData === "1"}
              onChange={handleChange}
            />
            <span> Very Low / Sad</span>
          </label>
          <label className="formLabel">
            <input
              className="radioButton"
              type="radio"
              name="userMood"
              value="2"
              checked={moodData === "2"}
              onChange={handleChange}
            />
            <span> Somewhat down</span>
          </label>
          <label>
            <input
              className="radioButton"
              type="radio"
              name="userMood"
              value="3"
              checked={moodData === "3"}
              onChange={handleChange}
            />
            <span> Neutral</span>
          </label>
          <label>
            <input
              className="radioButton"
              type="radio"
              name="userMood"
              value="4"
              checked={moodData === "4"}
              onChange={handleChange}
            />
            <span> Content / Happy</span>
          </label>
          <label>
            <input
              className="radioButton"
              type="radio"
              name="userMood"
              value="5"
              checked={moodData === "5"}
              onChange={handleChange}
            />
            <span> Highly positive / Joyful</span>
          </label>
          <SubmitGoBack />
        </form>
      </div>
    </div>
  );
}

export default UserMood;