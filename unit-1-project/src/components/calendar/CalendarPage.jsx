import { useState, useEffect } from 'react';
import { userMoods } from '../common/userGlobals.js';
import { getUserFirstName } from '../user/getUserName.js';
import calendarDetailedView from './calendarDetailedView.js';
//https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import setText from '../journal/setTextForEntries.js';
import './mood-custom-calendar.css';
import { useNavigate } from 'react-router';

export default function CalendarPage({ currentUser }) {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
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

    const formattedDate = date.toISOString().substring(0, 10);

    const entryList = calendarDetailedView(currentUser, formattedDate);

    const [year, month, day] = formattedDate.split('-');
    const formattedDateDisplay = `${month}-${day}-${year}`;

    const getTileClass = ({ date, view }) => {
        if (view === 'month') {
            const tileDate = date.toISOString().substring(0, 10);

            const moodsForDate = userMoods.filter(moodEntry =>
                moodEntry.userId === currentUser && moodEntry.date === tileDate
            );

            const lastEntry = moodsForDate[moodsForDate.length - 1];

            if (lastEntry && lastEntry.mood) {
                return `mood_${lastEntry.mood}`;
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

                {showModalWindow && (
                    <div className="modal-overlay" onClick={() => setShowModalWindow(false)}>
                        <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                            <h2>Details for {formattedDateDisplay}</h2>

                            <div className="modalJournalSection">
                                {entryList.length === 0 ? (
                                    <p>No records or journal entries for this day, {getUserFirstName(currentUser)}!</p>
                                ) : (
                                    entryList.map((item, index) => (
                                        <div key={item.entry?.entry_id || index} className="journalEntryCard">
                                            <h3>Session #{index + 1}</h3>

                                            {item.mood && (
                                                <p className="modalEntryData"><strong>Mood:</strong> {setText("mood", item.mood.mood)}</p>
                                            )}

                                            {item.capacity && (
                                                <p className="modalEntryData"><strong>Preference:</strong> {setText("depth", item.capacity.depth)}</p>
                                            )}

                                            {item.entry && (
                                                <p className="modalEntryDataTextResponses" style={{ whiteSpace: 'pre-line' }}>
                                                    <h4 id="JournalHeader"><strong>Journal Entry:</strong></h4>
                                                    <br />
                                                    {item.entry.journalEntry}
                                                    <br />
                                                </p>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>

                            <button className="closeButton" onClick={() => setShowModalWindow(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};



