import { useState, useEffect } from 'react';
import { loggedJournalEntries } from '../common/userGlobals.js';
//https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import setText from '../journal/setTextForEntries.js';
import './mood-custom-calendar.css';
import { useNavigate } from 'react-router';
import JournalReview from '../journal/JournalReview.jsx';
import { MOOD_OPTIONS } from '../common/userGlobals.js';

export default function CalendarPage({ currentUser, date, setDate }) {
    const navigate = useNavigate();
    const [showModalWindow, setShowModalWindow] = useState(false)

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);

    const handleDateClick = (selectedDate) => {
        setDate(selectedDate);
        setShowModalWindow(true);
    }

    const getTileClass = ({ date, view }) => {
        if (view === 'month') {
            const tileDate = date.toISOString().substring(0, 10);

            const latestMood = loggedJournalEntries.findLast(entry => entry.userId === currentUser && entry.date === tileDate)?.mood;

            if (latestMood) {
                return `mood_${latestMood}`;
            }
        }
        return null;
    };



    return (
        <div className="main">
            <div className="CalendarPage">
                <h3>Calendar Page</h3>
                <Calendar
                    className="Calendar"
                    tileClassName={getTileClass}
                    name="date"
                    value={date}
                    onChange={handleDateClick} />

                <div className="moodKey">
                    <h4> Mood Key:</h4>
                    {MOOD_OPTIONS.map((option, index) => {
                        const key = `mood_${index + 1}`;
                        return (
                            <div key={key} id={key}>
                                <p className={key}>{option.moodLabel}</p>

                            </div>
                        );
                    })}

                </div>

                {showModalWindow && (
                    <div className="modal-overlay" onClick={() => setShowModalWindow(false)}>
                        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                            <JournalReview currentUser={currentUser} date={date} />
                            <button className="closeButton" onClick={() => setShowModalWindow(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};



