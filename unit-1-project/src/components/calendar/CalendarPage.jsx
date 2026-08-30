import { useEffect } from 'react';
import Calendar from 'react-calendar';
import './mood-custom-calendar.css';
import { useNavigate } from 'react-router';
import JournalReview from '../journal/JournalReview.jsx';
import { MOOD_OPTIONS } from '../common/userGlobals.js';
import getUserInfo from '../authentication/getUserInfo.js';

export default function CalendarPage({ isSubscribed, setIsSubscribed, currentUser, date, setDate, message, setMessage, showModalWindow, setShowModalWindow, journalUpdate, setJournalUpdate, entryData, setEntryData }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate('/');
            return;
        }
        const subscription = getUserInfo(currentUser).userSubscribed;
        setIsSubscribed(subscription);

    }, [currentUser, navigate, setIsSubscribed]);

    const handleDateClick = (selectedDate) => {
        setDate(selectedDate);
        setShowModalWindow(true);
    }

    const getTileClass = ({ date, view }) => {
        if (view === 'month') {
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const year = date.getFullYear();
            const tileDate = `${month}-${day}-${year}`;

            const latestMood = journalUpdate.findLast(entry => entry.userId === currentUser && entry.date === tileDate)?.mood;

            if (latestMood) {
                return `mood_${latestMood}`;
            }
        }
        return null;
    };


    //display calendar w/ custom calendar coding; Allow entry viewing by clicking on dates.
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
                <div className="keyBox" >
                    <h4 className="moodHeader"> Mood Key</h4>
                    {/*Create color coding for calendar view */}
                    <div className="moodKey">
                        {MOOD_OPTIONS.map((option, index) => {
                            const key = `mood_${index + 1}`;
                            return (
                                <div key={key} id={key}>
                                    <p className={key}>{option.moodLabel}</p>

                                </div>
                            );
                        })}

                    </div>
                </div>
                {/*Display ModalWindow with Journal Entries for date user selected; display Journal Review Page*/}
                {showModalWindow && (
                    <div className="modal-overlay" onClick={() => setShowModalWindow(false)}>
                        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                            <JournalReview isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed} currentUser={currentUser} date={date} journalUpdate={journalUpdate} setJournalUpdate={setJournalUpdate} entryData={entryData} setEntryData={setEntryData} message={message} setMessage={setMessage} showModalWindow={showModalWindow} setShowModalWindow={setShowModalWindow} />
                            <button className="closeButton" onClick={() => setShowModalWindow(false)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};



