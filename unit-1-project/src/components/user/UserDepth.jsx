import { useState, useEffect } from 'react';
import { getUserFirstName } from './getUserName.js';
import { useNavigate } from 'react-router';
import SubmitGoBack from '../common/SubmitGoBack.jsx';
import ModalWindow from '../common/ModalWindow.jsx';
import registerUserMood from './registerUserMood.js';
import registerUserDepth from './registerUserDepth.js';
import registerJournalEntry from '../journal/registerJournalEntry.js';
import { DEPTH_OPTIONS } from '../common/userGlobals.js';

function UserDepth({ currentUser, moodData, depthData, setDepthData }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showModalWindow, setShowModalWindow] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setDepthData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!depthData) {
      setErrorMessage(`Try again. I'd like to know how best to support your experience today, ${getUserFirstName(currentUser)}.`);
      setShowModalWindow(true);
      return;
    }

    if (depthData === "3") {
      registerUserMood(currentUser, moodData);
      registerUserDepth(currentUser, depthData);
      registerJournalEntry(currentUser,`\nNo journal data available.`);
      navigate('/Calendar');
    } else {
      navigate('/Journal-Entry');
    }
  };

  return (
    <div className="main">
      <div className="UserDepth">

        {showModalWindow && (
          <ModalWindow
            message={errorMessage}
            onClose={() => setShowModalWindow(false)}>
          </ModalWindow>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <h3 id="depthLine"> How would you like to process your thoughts today, {getUserFirstName(currentUser)}?</h3>

          {DEPTH_OPTIONS.map((preference) => (
            <label key={preference.value} className="formLabel">
              <input
                className="radioButton"
                type="radio"
                name="userDepth"
                value={preference.value}
                checked={depthData === preference.value}
                onChange={handleChange}
              />
              <span> {preference.choiceText}</span>
              <p className="ButtonDescription">
                {preference.depthLabel}
              </p>
            </label>
          ))}

          <SubmitGoBack resetInput={() => setDepthData(null)} />
        </form>
      </div>
    </div>
  );
}

export default UserDepth;