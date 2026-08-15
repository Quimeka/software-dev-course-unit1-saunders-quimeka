import { useState } from 'react';
import { onyxUsers, userDepths, userMoods } from '../common/userGlobals.js';
import { getUserFirstName } from '../user/getUserName.js';
import registerJournalEntry from './registerJournalEntry.js';
import { MOOD_PROMPTS } from './moodPrompts.js';
import { useNavigate } from 'react-router';

function JournalEntryPage({ currentUser, userJournalEntry, setUserJournalEntry, moodData, depthData }) {
    const navigate = useNavigate();

    const [promptAnswers, setpromptAnswers] = useState(
        {
            q1: "",
            q2: "",
            q3: "",
            q4: ""
        });

    const handleChange = (e) => {
        const { value } = e.target;
        console.log("Updating text entry:", value);

        setUserJournalEntry(value);
    };

    const handlePromptChange = (key, value) => {
        setpromptAnswers(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let finalEntry = "";

        if (!depthData) {
            alert(`Please continue with changing the entry type, ${getUserFirstName(currentUser)}.`);
            return;
        }

        if (depthData === "1") {
            if (!userJournalEntry.trim()) {
                alert(`Please feel free to take your time, but it's best you capture your journal log, ${getUserFirstName(currentUser)}.`);
                return;
            }

            finalEntry = userJournalEntry;

        } else if (depthData === "2") {
            if (!promptAnswers.q1.trim() && !promptAnswers.q2.trim() && !promptAnswers.q3.trim() && !promptAnswers.q4.trim()) {
                alert(`Please answer at least one prompt before saving, ${getUserFirstName(currentUser)}.`);
                return;
            }

            finalEntry = `
              Q1: ${promptAnswers.q1}
              Q2: ${promptAnswers.q2}
              Q3: ${promptAnswers.q3}
              Q4: ${promptAnswers.q4}
            `.trim();
        }

        registerJournalEntry(currentUser, finalEntry);
        alert("Journal entry registered successfully!");

        setUserJournalEntry("");
        setpromptAnswers({ q1: "", q2: "", q3: "", q4: "" });

        navigate('/Calendar');
    };


    const today = new Date().toISOString().substring(0, 10);

    const todayMoods = userMoods.filter(mood => mood.user_id === currentUser && mood.date === today);

    const todayMood = todayMoods[todayMoods.length - 1]?.mood;


    const todayDepths = userDepths.filter(depth => depth.user_id === currentUser && depth.date === today);

    const todayDepth = todayDepths[todayDepths.length - 1]?.depth;

    let todayMoodDisplay = "";
    if (todayMood === "1") {
        todayMoodDisplay = "Very Heavy";
    } else if (todayMood === "2") {
        todayMoodDisplay = "Down/Low";
    } else if (todayMood === "3") {
        todayMoodDisplay = "Neutral/Flat";
    } else if (todayMood === "4") {
        todayMoodDisplay = "Good/Steady";
    } else if (todayMood === "5") {
        todayMoodDisplay = "Vibrant/Radiant";
    } else {
        todayMoodDisplay = "No mood data available for today.";
    }

    let todayDepthDisplay = "";
    if (todayDepth === "1") {
        todayDepthDisplay = "Low Capacity/Energy";
    } else if (todayDepth === "2") {
        todayDepthDisplay = "High Capacity/Energy";
    } else {
        todayDepthDisplay = "No capacity data available for today.";
    }

    const promptsForToday = MOOD_PROMPTS[todayMood];
    const [entryMode, setEntryMode] = useState(null);

    return (
        <div>
            <h2>Welcome, {getUserFirstName(currentUser)}!</h2>
            <p><strong>Today's Mood: </strong>{todayMoodDisplay}</p>
            <p><strong>Today's Depth: </strong>{todayDepthDisplay}</p>

            <p><strong>Journal Entry Date:</strong> {today}</p>


            <form onSubmit={handleSubmit}>
                <button type="button" onClick={() => setEntryMode(depthData)}>
                    Change Journal Entry Type
                </button>

                {entryMode === "1" && (
                    <div>
                        <textarea
                            name="user_journal_entry"
                            value={userJournalEntry || ""}
                            onChange={handleChange}
                            rows="50"
                            cols="100"
                            placeholder="Write whatever comes to mind..."
                        />
                    </div>
                )}

                {entryMode === "2" && (
                    <div>
                        <div>
                            <label><strong>1. {promptsForToday[0]}</strong></label><br />
                            <textarea
                                value={promptAnswers.q1}
                                onChange={(e) => handlePromptChange("q1", e.target.value)}
                                rows="10"
                                cols="50" />
                        </div>

                        <div>
                            <label><strong>2. {promptsForToday[1]}</strong></label><br />
                            <textarea
                                value={promptAnswers.q2}
                                onChange={(e) => handlePromptChange("q2", e.target.value)}
                                rows="10"
                                cols="50" />
                        </div>

                        <div>
                            <label><strong>3. {promptsForToday[2]}</strong></label><br />
                            <textarea
                                value={promptAnswers.q3}
                                onChange={(e) => handlePromptChange("q3", e.target.value)}
                                rows="10"
                                cols="50" />
                        </div>

                        <div>
                            <label><strong>4. {promptsForToday[3]}</strong></label><br />
                            <textarea
                                value={promptAnswers.q4}
                                onChange={(e) => handlePromptChange("q4", e.target.value)}
                                rows="10"
                                cols="50" />
                        </div>
                    </div>
                )}

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

export default JournalEntryPage;
