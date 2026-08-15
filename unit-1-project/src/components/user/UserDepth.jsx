import { useState } from 'react';
import { onyxUsers} from '../common/userGlobals.js';
import { getUserFirstName } from './getUserName.js';
import registerUserDepth from './registerUserDepth.js';
import { useNavigate } from 'react-router';



function UserDepth({currentUser, depthData, setDepthData}) {

  const navigate = useNavigate();

  const handleChange = (e) => {
    
    setDepthData(e.target.value);
    
    console.log("depthData:", depthData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!depthData) {
      alert(`Please provide a response to the question,${getUserFirstName(currentUser)} .`);
      return;
    }

    registerUserDepth(currentUser, depthData);    
    alert("Depth registered successfully!");

    navigate('/Journal-Entry');
    };


  return (
    <div className="UserDepth">
      <br />
      <h1>How are you feeling today, {getUserFirstName(currentUser)}?</h1>

      <form onSubmit={handleSubmit}>
         <label>
          (1) Low Capacity/Energy
          <input
            type="radio"
            name="user_depth"
            value="1"
            checked={depthData === "1"}
            onChange={handleChange}
          />
        </label>
        <p>Give me a completely blank page to vent and express myself.</p>
        <label>
          (2) High Capacity/Energy
          <input
            type="radio"
            name="user_depth"
            value="2"
            checked={depthData === "2"}
            onChange={handleChange}
          />
        </label>
        <p>Give me a few prompts to guide my reflection.</p>
        <br />
        <br />
        <div className="form-nav-buttons">
        <button type="submit">Submit</button>
        <button onClick={() => navigate(-1)}>
          Go Back
        </button>
        </div>
      </form>
    </div>
  );
}

export default UserDepth;