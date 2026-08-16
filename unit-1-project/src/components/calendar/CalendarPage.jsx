import { useState } from 'react';
import { onyxUsers, userDepths, userMoods } from '../common/userGlobals.js';
import { getUserFirstName } from '../user/getUserName.js';
import calendarDetailedView from './calendarDetailedView.js';
//https://www.npmjs.com/package/react-calendar
import Calendar from 'react-calendar';
import setText from '../journal/setTextForEntries.js';
import './mood-custom-calendar.css';

export default function CalendarPage({ currentUser }) {

    const [date, setDate] = useState(new Date());
    const [showModalWindow, setShowModalWindow] = useState(false)

    const handleDateClick = (selectedDate) => {
        setDate(selectedDate);
        setShowModalWindow(true);
    }

    const formattedDate = date.toISOString().substring(0, 10);

    const entryList = calendarDetailedView(currentUser, formattedDate);

    const getTileClass = ({ date, view }) => {
        if (view === 'month') {
            const tileDate = date.toISOString().substring(0, 10);

            const moodsForDate = userMoods.filter(moodEntry =>
                String(moodEntry.user_id) === String(currentUser) && moodEntry.date === tileDate
            );

            const lastEntry = moodsForDate[moodsForDate.length - 1];

            if (lastEntry && lastEntry.mood) {
                return `mood_${lastEntry.mood}`;
            }
        }
        return null;
    };



    return (
        <div>
            <h1>Calendar Page</h1>
            <p>This is the calendar page for {getUserFirstName(currentUser)}.</p>
            <Calendar
                tileClassName={getTileClass}
                name="date"
                value={date}
                onChange={handleDateClick} />

            {showModalWindow && (
                <div className="modal-overlay" onClick={() => setShowModalWindow(false)}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                        <h2>Details for {formattedDate}</h2>

                        <div className="modal-journal-section">
                            {entryList.length === 0 ? (
                                <p>No records or journal entries for this day, {getUserFirstName(currentUser)}!</p>
                            ) : (
                                entryList.map((item, index) => (
                                    <div key={item.Entry?.entry_id || index} className="journal-entry-card">
                                        <h3>Session #{index + 1}</h3>

                                        {item.Mood && (
                                            <p><strong>Mood:</strong> {setText("mood", item.Mood.mood)}</p>
                                        )}

                                        {item.Capacity && (
                                            <p><strong>Capacity:</strong> {setText("depth", item.Capacity.depth)}</p>
                                        )}

                                        {item.Entry && (
                                            <p style={{ whiteSpace: 'pre-wrap' }}>
                                                <strong>Journal Entry:</strong>
                                                <br />
                                                {item.Entry.journal_entry}
                                                <br />
                                            </p>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>

                        <button onClick={() => setShowModalWindow(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};



