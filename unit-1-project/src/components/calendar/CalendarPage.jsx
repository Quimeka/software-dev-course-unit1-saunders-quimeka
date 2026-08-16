import { useState } from 'react';
import { userMoods } from '../common/userGlobals.js';
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
        <div className="CalendarPage">
            <h1>Calendar Page</h1>
            <p>This is the calendar page for {getUserFirstName(currentUser)}.</p>
            <Calendar
                className="Calendar"
                tileClassName={getTileClass}
                name="date"
                value={date}
                onChange={handleDateClick} />

            {showModalWindow && (
                <div className="modal-overlay" onClick={() => setShowModalWindow(false)}>
                    <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                        <h2>Details for {formattedDate}</h2>

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
                                            <p className="modalEntryData"><strong>Capacity:</strong> {setText("depth", item.capacity.depth)}</p>
                                        )}

                                        {item.entry && (
                                            <p className="modalEntryData" style={{ whiteSpace: 'pre-wrap' }}>
                                                <strong>Journal Entry:</strong>
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
    );
};



