import { useState } from 'react';
import { getUserFirstName } from './getUserName.js';
import registerUserDepth from './registerUserDepth.js';
import { useNavigate } from 'react-router';
import SubmitGoBack from '../common/SubmitGoBack.jsx';
import ModalWindow from '../common/ModalWindow.jsx';



function UserDepth({ currentUser, depthData, setDepthData }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showModalWindow, setShowModalWindow] = useState(false)

  const handleChange = (e) => {
    setDepthData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!depthData) {
      setErrorMessage(`Please provide a response to the question,${getUserFirstName(currentUser)} .`);
      setShowModalWindow(true);
      return;
    }

    registerUserDepth(currentUser, depthData);
    navigate('/Journal-Entry');
  };


  return (
    <div className="UserDepth">

      <h1>How are you feeling today, {getUserFirstName(currentUser)}?</h1>

      {showModalWindow && (
        <ModalWindow
          message={errorMessage}
          onClose={() => setShowModalWindow(false)}>
        </ModalWindow>
      )}

      <form onSubmit={handleSubmit}>
        <label className="formLabel">
          (1) Low Capacity/Energy
          <input
            className="radioButton"
            type="radio"
            name="userDepth"
            value="1"
            checked={depthData === "1"}
            onChange={handleChange}
          />
        </label>
        <p>Give me a completely blank page to vent and express myself.</p>
        <label className="formLabel">
          (2) High Capacity/Energy
          <input
            className="radioButton"
            type="radio"
            name="userDepth"
            value="2"
            checked={depthData === "2"}
            onChange={handleChange}
          />
        </label>
        <p>Give me a few prompts to guide my reflection.</p>

        <SubmitGoBack />
      </form>
    </div>
  );
}

export default UserDepth;