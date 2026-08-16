import { useState } from 'react';
import { userDepths, userMoods, MOOD_PROMPTS } from '../common/userGlobals.js';
import { getUserFirstName } from '../user/getUserName.js';
import registerJournalEntry from './registerJournalEntry.js';
import { useNavigate } from 'react-router';
import setText from './setTextForEntries.js';
import SubmitGoBack from '../common/SubmitGoBack.jsx';


function JournalEntryPage({ currentUser, userJournalEntry, setUserJournalEntry, moodData, depthData }) {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [showModalWindow, setShowModalWindow] = useState(false)


    const [promptAnswers, setPromptAnswers] = useState(
        {
            q1: "",
            q2: "",
            q3: "",
            q4: ""
        });

    const handleChange = (e) => {
        const { value } = e.target;
        setUserJournalEntry(value);
    };

    const handlePromptChange = (key, value) => {
        setPromptAnswers(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage("");
        let finalEntry = "";

        if (!depthData) {
            setErrorMessage(`Please continue with changing the entry type, ${getUserFirstName(currentUser)}.`);
            setShowModalWindow(true);
            return;
        }

        if (depthData === "1") {
            if (!userJournalEntry.trim()) {
                setErrorMessage(`Please feel free to take your time, but it's best you capture your journal log, ${getUserFirstName(currentUser)}.`);
                setShowModalWindow(true);
                return;
            }

            finalEntry = userJournalEntry;

        } else if (depthData === "2") {
            if (!promptAnswers.q1.trim() && !promptAnswers.q2.trim() && !promptAnswers.q3.trim() && !promptAnswers.q4.trim()) {
                setErrorMessage(`Please answer at least one prompt before saving, ${getUserFirstName(currentUser)}.`);
                setShowModalWindow(true);
                return;
            }

        finalEntry = `
        ${promptsForToday[0]}:\n${promptAnswers.q1}
        ${promptsForToday[1]}:\n${promptAnswers.q2}
        ${promptsForToday[2]}:\n${promptAnswers.q3}
        ${promptsForToday[3]}:\n${promptAnswers.q4}
        `.trim();
        }

        registerJournalEntry(currentUser, finalEntry);
        setUserJournalEntry("");
        setPromptAnswers({ q1: "", q2: "", q3: "", q4: "" });

        navigate('/Calendar');
    };


    const today = new Date().toISOString().substring(0, 10);

    const todayMoods = userMoods.filter(mood => mood.userId === currentUser && mood.date === today);

    const todayMood = todayMoods[todayMoods.length - 1]?.mood;


    const todayDepths = userDepths.filter(depth => depth.userId === currentUser && depth.date === today);

    const todayDepth = todayDepths[todayDepths.length - 1]?.depth;

    let todayMoodDisplay = "";
    todayMoodDisplay = setText("mood", todayMood);

    let todayDepthDisplay = "";
    todayDepthDisplay = setText("depth", todayDepth);

    const promptsForToday = MOOD_PROMPTS[todayMood];

    const [entryMode, setEntryMode] = useState(null);

    return (
        <div className="JournalEntry">
            <h2>Welcome, {getUserFirstName(currentUser)}!</h2>
            <p><strong>Today's Mood: </strong>{todayMoodDisplay}</p>
            <p><strong>Today's Depth: </strong>{todayDepthDisplay}</p>

            <p><strong>Journal Entry Date:</strong> {today}</p>

            {showModalWindow && (
                <div className="modal-overlay" onClick={() => setShowModalWindow(false)}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                        <h4>{errorMessage}</h4>
                        <button onClick={() => setShowModalWindow(false)}>Close</button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <button className="journalButton" type="button" onClick={() => setEntryMode(depthData)}>
                    Change Journal Entry Type
                </button>

                {entryMode === "1" && (
                    <div>
                        <textarea 
                            className="textBox"
                            name="userJournalEntry"
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
                            <label className="promptLabel" ><strong>1. {promptsForToday[0]}</strong></label>
                            <textarea
                                className="textBox"
                                value={promptAnswers.q1}
                                onChange={(e) => handlePromptChange("q1", e.target.value)}
                                rows="10"
                                cols="50" />
                        </div>

                        <div>
                            <label className="promptLabel"><strong>2. {promptsForToday[1]}</strong></label>
                            <textarea
                                className="textBox"
                                value={promptAnswers.q2}
                                onChange={(e) => handlePromptChange("q2", e.target.value)}
                                rows="10"
                                cols="50" />
                        </div>

                        <div>
                            <label className="promptLabel"><strong>3. {promptsForToday[2]}</strong></label>
                            <textarea
                                className="textBox"
                                value={promptAnswers.q3}
                                onChange={(e) => handlePromptChange("q3", e.target.value)}
                                rows="10"
                                cols="50" />
                        </div>

                        <div>
                            <label className="promptLabel"><strong>4. {promptsForToday[3]}</strong></label>
                            <textarea 
                                className="textBox"
                                value={promptAnswers.q4}
                                onChange={(e) => handlePromptChange("q4", e.target.value)}
                                rows="10"
                                cols="50" />
                        </div>
                    </div>
                )}

                <SubmitGoBack />
            </form>
        </div>
    );
}

export default JournalEntryPage;
