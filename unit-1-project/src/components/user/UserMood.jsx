import { useState } from 'react';
import { onyxUsers} from '../common/userGlobals.js';
import { getUserFirstName } from './getUserName.js';
import registerUserMood from './registerUserMood.js';
import { useNavigate } from 'react-router';


function UserMood({currentUser, moodData, setMoodData}) {
  const navigate = useNavigate(); 

  const handleChange = (e) => {

    const chosenMood = e.target.value;
    setMoodData(chosenMood);
    console.log("moodData:", chosenMood);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!moodData) {
      alert(`Please provide a response to the question,${getUserFirstName(currentUser)} .`);
      return;
    }
    registerUserMood(currentUser, moodData);    
    alert("Mood registered successfully!");

    navigate('/Depth'); 
    };


  return (
    <div className="UserMood">
      <br />
      <h1>How are you feeling today, {getUserFirstName(currentUser)}?</h1>

      <form onSubmit={handleSubmit}>
         <label>
          (1) Very Heavy
          <input
            type="radio"
            name="user_mood"
            value="1"
            checked={moodData === "1"}
            onChange={handleChange}
          />
        </label>
        <label>
          (2) Down/Low
          <input
            type="radio"
            name="user_mood"
            value="2"
            checked={moodData === "2"}
            onChange={handleChange}
          />
        </label>
        <label>
          (3) Neutral/Flat
          <input
            type="radio"
            name="user_mood"
            value="3"
            checked={moodData === "3"}
            onChange={handleChange}
          />
        </label>
        <label>
          (4) Good/Steady
          <input
            type="radio"
            name="user_mood"
            value="4"
            checked={moodData === "4"}
            onChange={handleChange}
          />
        </label>
        <label>
          (5) Vibrant/Radiant
          <input
            type="radio"
            name="user_mood"
            value="5"
            checked={moodData === "5"}
            onChange={handleChange}
          />
        </label>

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

export default UserMood;