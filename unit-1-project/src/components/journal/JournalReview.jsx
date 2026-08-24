import { useState, useEffect } from 'react';
import setText from '../journal/setTextForEntries.js';
import { useNavigate } from 'react-router';
import updateJournalEntryPage from './updateJournalEntry.jsx';
import { loggedJournalEntries } from '../common/userGlobals.js';
import './journal-custom.css';

export default function JournalReview({ currentUser, date, firstName, journalUpdate, setJournalUpdate, entryData, setEntryData, message, setMessage, showModalWindow, setShowModalWindow }) {
    const navigate = useNavigate();

    const formattedDate = date.toISOString().substring(0, 10);

    const [year, month, day] = formattedDate.split('-');
    const formattedDateDisplay = `${month}-${day}-${year}`;

    const entryList = loggedJournalEntries.filter(entry => entry.userId === currentUser && entry.date === formattedDate);

    const currentDate = new Date().toISOString().substring(0, 10);

    const showEditButton = formattedDate === currentDate;

    const [deletingEntry, setDeletingEntry] = useState(false);

    const handleDelete = (journalItem) => {
        setDeletingEntry(true);

        const deleteItemIndex = loggedJournalEntries.findIndex(item =>
            item.journalEntryNumber === journalItem.journalEntryNumber
        );
        if (deleteItemIndex !== -1) {
            loggedJournalEntries.splice(deleteItemIndex, 1);
            setJournalUpdate([...loggedJournalEntries]);
        }
        setDeletingEntry(false);
    };

    const handleEdit = (journalItem) => {
        setEntryData(journalItem);
        handleDelete(journalItem);
        setJournalUpdate([...loggedJournalEntries]);
        setShowModalWindow(false);
        navigate('/edit-entry');
    }

    return (
        <div className="mainJournal">
            <h2>Details for {formattedDateDisplay}</h2>
            <div className="modalJournalSection">
                {entryList.length === 0 ? (
                    <p>No records or journal entries for this day, {firstName}!</p>
                ) : (
                    entryList.map((item, index) => {
                        const lines = Array.isArray(item.entry) ? item.entry : [item.entry];

                        return (
                            <div key={item.journalEntryNumber || index} className="journalEntryCard">
                                <h3>Session #{index + 1}</h3>
                                <p className="modalEntryData"><strong>Mood:</strong> {setText("mood", item.mood)}</p>
                                <p className="modalEntryData"><strong>Preference:</strong> {setText("depth", item.depth)}</p>

                                <div className="modalEntryDataTextResponses" style={{ whiteSpace: 'pre-line' }}>
                                    <p className="JournalHeader"><strong>Journal Entry:</strong></p>
                                    {lines.map((line, lineIndex) => (
                                        <p key={lineIndex}>
                                            {(lineIndex % 2 === 0 && item.depth === "2") ? (
                                                <strong>{line}</strong>
                                            ) : (<>{line}</>
                                            )}
                                        </p>
                                    ))}
                                </div>

                                {showEditButton &&
                                    (<button className="editButton" type="button" disabled={deletingEntry} onClick={() => handleEdit(item)}>Edit</button
                                    >)}
                                <button className="deleteButton" type="button" disabled={deletingEntry} onClick={() => handleDelete(item)}>Delete Session #{index + 1}</button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    )
}
