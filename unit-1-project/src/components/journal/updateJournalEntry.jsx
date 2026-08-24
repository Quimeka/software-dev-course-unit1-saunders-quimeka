import { useState, useEffect } from 'react';
import { loggedJournalEntries, MOOD_PROMPTS } from '../common/userGlobals.js';
import { useNavigate } from 'react-router';
import SubmitGoBack from '../common/SubmitGoBack.jsx';
import ModalWindow from '../common/ModalWindow.jsx';
import registerFullJournalEntry from './registerFullJournalEntry.js';
import setText from './setTextForEntries.js';


function UpdateJournalEntryPage({ currentUser, userJournalEntry, setUserJournalEntry, firstName, message, setMessage, showModalWindow, entryData, setShowModalWindow, setJournalUpdate }) {
    const navigate = useNavigate();
    const [entryMode, setEntryMode] = useState(entryData.depth);
    const [initialEntry, setInitialEntry] = useState(entryData.entry || " ");
    //establish prop for prompts
    const [promptAnswers, setPromptAnswers] = useState(
        {
            q1: entryData.entry[1],
            q2: entryData.entry[3],
            q3: entryData.entry[5],
            q4: entryData.entry[7],
        });

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    const handleJournalTypeChange = (e) => {
        setInitialEntry(e.target.value);
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

        if (entryData.depth !== "2") {
            if (!initialEntry.trim()) {
                setMessage(`Try again. It's best you update your thoughts, ${firstName}.`);
                setShowModalWindow(true);
                return;
            }

            finalEntry = initialEntry;

        } else if (entryData.depth === "2") {

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

        registerFullJournalEntry(currentUser, entryData.mood, entryData.depth, finalEntry);
        //update global props to ensure logged journals remains accurate for application
        setJournalUpdate(loggedJournalEntries);

        //clear global props
        setUserJournalEntry("");
        setPromptAnswers({
            q1: "",
            q2: "",
            q3: "",
            q4: ""
        });

        navigate('/Calendar');
    };

    //structure date for user readability purposes 
    const today = new Date().toISOString().substring(0, 10);
    const [year, month, day] = today.split('-');
    const formattedDateDisplay = `${month}-${day}-${year}`;

    const todayMoodDisplay = setText("mood", entryData.mood);
    const todayDepthDisplay = setText("depth", entryData.depth);

    const promptsForToday = MOOD_PROMPTS[entryData.mood];

    //populate journal form with user input; provide form based on depth.
    return (
        <div className="main">
            <div className="JournalEntry">
                <h2> Welcome back, {firstName}!</h2>
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

                    {entryMode !== "2" && (
                        <div className="PromptGroup">
                            <textarea
                                className="textBox"
                                name="userJournalEntry"
                                value={initialEntry}
                                onChange={handleJournalTypeChange}
                                rows="50"
                                cols="100"
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

export default UpdateJournalEntryPage;
