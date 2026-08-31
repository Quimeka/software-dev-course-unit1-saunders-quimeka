import { useState, useEffect } from 'react';
import { loggedJournalEntries, MOOD_PROMPTS } from '../common/userGlobals.js';
import { useNavigate } from 'react-router';
import SubmitGoBack from '../common/SubmitGoBack.jsx';
import ModalWindow from '../common/ModalWindow.jsx';
import registerFullJournalEntry from './registerFullJournalEntry.js';
import setText from './setTextForEntries.js';
import { getDate } from '../common/getTodaysDate.js';
import getUserInfo from '../authentication/getUserInfo.js';


function JournalEntryPage({ setIsSubscribed, currentUser, userJournalEntry, setUserJournalEntry, moodData, setMoodData, depthData, setDepthData, firstName, message, setMessage, showModalWindow, setShowModalWindow, setJournalUpdate }) {
    const navigate = useNavigate();
    const [entryMode, setEntryMode] = useState(null);
    //establish prop for prompts
    const [promptAnswers, setPromptAnswers] = useState(
        {
            q1: "",
            q2: "",
            q3: "",
            q4: ""
        });

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
            return;
        }
        const subscription = getUserInfo(currentUser).userSubscribed;
        setIsSubscribed(subscription);

    }, [currentUser, navigate, setIsSubscribed]);

    const handleJournalTypeChange = (e) => {
        setUserJournalEntry(e.target.value);
    };

    const handlePromptChange = (key, value) => {
        setPromptAnswers(prevData => ({
            ...prevData,
            [key]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("");
        let finalEntry = "";

        if (depthData === "1") {
            if (!userJournalEntry.trim()) {
                setMessage(`Try again. It's best you capture your thoughts, ${firstName}.`);
                setShowModalWindow(true);
                return;
            }
            finalEntry = userJournalEntry;

        } else if (depthData === "2") {
            //clean up responses and combine into string for logged journals push.
            const prompt1Clean = (promptAnswers.q1 || "").trim();
            const prompt2Clean = (promptAnswers.q2 || "").trim();
            const prompt3Clean = (promptAnswers.q3 || "").trim();
            const prompt4Clean = (promptAnswers.q4 || "").trim();

            if (!prompt1Clean && !prompt2Clean && !prompt3Clean && !prompt4Clean) {
                setMessage(`Please answer at least one prompt before saving, ${firstName}.`);
                setShowModalWindow(true);
                return;
            }

            finalEntry =
                `${promptsForToday[0]}
${prompt1Clean || "No answer provided."}
${promptsForToday[1]}
${prompt2Clean || "No answer provided."}
${promptsForToday[2]}
${prompt3Clean || "No answer provided."}
${promptsForToday[3]}
${prompt4Clean || "No answer provided."}`;
        }

        registerFullJournalEntry(currentUser, moodData, depthData, finalEntry);
        //update global props to ensure logged journals remains accurate for application
        setJournalUpdate([...loggedJournalEntries]);

        //clear global props
        setUserJournalEntry("");
        setDepthData(null);
        setMoodData(null);
        setPromptAnswers({
            q1: "",
            q2: "",
            q3: "",
            q4: ""
        });

        navigate('/calendar');
    };

    const formattedDateDisplay = getDate();

    const todayMoodDisplay = setText("mood", moodData);
    const todayDepthDisplay = setText("depth", depthData);

    //pull prompts based on user input
    const promptsForToday = MOOD_PROMPTS[moodData];

    //populate journal form with user input; provide form based on depth.
    return (
        <div className="main">
            <div className="JournalEntry">
                <h2>Welcome, {firstName}!</h2>
                <p><strong>Your Space Today: </strong>{todayMoodDisplay}</p>
                <p><strong>Your Reflection Style: </strong>{todayDepthDisplay}</p>

                <p><strong>Date:</strong> {formattedDateDisplay}</p>

                {showModalWindow && (
                    <ModalWindow
                        message={message}
                        onClose={() => setShowModalWindow(false)}>
                    </ModalWindow>
                )}

                <form onSubmit={handleSubmit}>
                    <button className="journalButton" type="button" onClick={() => setEntryMode(entryMode === depthData ? null : depthData)}>
                        {depthData === "1" ? "Start Free Writing" : "View My Prompts"}
                    </button>

                    {entryMode === "1" && (
                        <div className="PromptGroup">
                            <textarea
                                className="textBox"
                                name="userJournalEntry"
                                value={userJournalEntry}
                                onChange={handleJournalTypeChange}
                                rows="50"
                                cols="100"
                                placeholder="Write whatever comes to mind..."
                            />
                        </div>
                    )}

                    {entryMode === "2" && promptsForToday && (
                        <div className="PromptGroup">
                            {promptsForToday.map((prompt, index) => {
                                const key = `q${index + 1}`;
                                return (
                                    <div key={key} id={key}>
                                        <label className="promptLabel"><strong>{index + 1}. {prompt}</strong></label>
                                        <textarea
                                            className="textBox"
                                            value={promptAnswers[key] || ""}
                                            onChange={(e) => handlePromptChange(key, e.target.value)}
                                            rows="10"
                                            cols="50" />
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <SubmitGoBack />
                </form>
            </div >
        </div >
    );
}

export default JournalEntryPage;
