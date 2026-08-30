import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import SubmitGoBack from '../common/SubmitGoBack.jsx';
import ModalWindow from '../common/ModalWindow.jsx';
import { DEPTH_OPTIONS, loggedJournalEntries } from '../common/userGlobals.js';
import registerFullJournalEntry from '../journal/registerFullJournalEntry.js';
import getUserInfo from '../authentication/getUserInfo.js';

function UserDepth({ isSubscribed, setIsSubscribed, currentUser, moodData, depthData, setDepthData, firstName, message, setMessage, showModalWindow, setShowModalWindow, setJournalUpdate }) {
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
    setDepthData(null);
  }, [setDepthData]);

  const handleChange = (e) => {
    setDepthData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    //check user input and provide an error message to the user. 
    if (!depthData) {
      setMessage(`Try again. I'd like to know how best to support your experience today, ${firstName}.`);
      setShowModalWindow(true);
      return;
    }

    //manually add user journal log for tracking purposes post-submission
    if (depthData === "3") {
      registerFullJournalEntry(currentUser, moodData, depthData, `No journal data available.`);
      setJournalUpdate([...loggedJournalEntries]);
      navigate('/Calendar');
    } else {
      navigate('/Journal-Entry');
    }
  };
  //display depth options to user and process input via submittal.
  return (
    <div className="main">
      <div className="UserDepth">

        {showModalWindow && (
          <ModalWindow
            message={message}
            onClose={() => setShowModalWindow(false)}>
          </ModalWindow>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <h3 id="depthLine"> How would you like to process your thoughts today, {firstName}?</h3>

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