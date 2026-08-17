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

      <h3 > How would you like to process your thoughts today, {getUserFirstName(currentUser)}?</h3>

      {showModalWindow && (
        <ModalWindow
          message={errorMessage}
          onClose={() => setShowModalWindow(false)}>
        </ModalWindow>
      )}

      <form onSubmit={handleSubmit}>
        <label className="formLabel">
          <input
            className="radioButton"
            type="radio"
            name="userDepth"
            value="1"
            checked={depthData === "1"}
            onChange={handleChange}
          />
          <span> Open-Ended Space</span>
        </label>
        <p className="ButtonDescription"> I just want to write freely without any structure.</p>
        <label className="formLabel">
          <input
            className="radioButton"
            type="radio"
            name="userDepth"
            value="2"
            checked={depthData === "2"}
            onChange={handleChange}
          /> <span> Structured Reflection</span>
        </label>
        <p className="ButtonDescription">I would prefer some specific questions to answer.</p>

        <SubmitGoBack />
      </form>
    </div>
  );
}

export default UserDepth;