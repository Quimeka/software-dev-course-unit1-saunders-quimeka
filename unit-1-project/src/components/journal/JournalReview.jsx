import { useState, useEffect } from 'react';
import setText from '../journal/setTextForEntries.js';
import { useNavigate } from 'react-router';
import updateJournalEntryPage from './updateJournalEntry.jsx';
import { loggedJournalEntries } from '../common/userGlobals.js';
import './journal-custom.css';
import { getDate } from '../common/getTodaysDate.js';

export default function JournalReview({ currentUser, date, firstName, journalUpdate, setJournalUpdate, entryData, setEntryData, message, setMessage, showModalWindow, setShowModalWindow }) {
    const navigate = useNavigate();

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${month}-${day}-${year}`;

    //pull logged journals and filter based on user and date 
    const entryList = journalUpdate.filter(entry => entry.userId === currentUser && entry.date === formattedDate);
    const currentDate = getDate();

    //make current date entries editable for user 
    const showEditButton = formattedDate === currentDate;

    //delete entries based on user feedback; update logged journal 
    const handleDelete = (journalItem) => {
        const updatedEntries = loggedJournalEntries.filter(item => item.journalEntryNumber !== journalItem.journalEntryNumber);

        loggedJournalEntries.length = 0;
        loggedJournalEntries.push(...updatedEntries);

        setJournalUpdate(updatedEntries);
    };

    //edit entry based on user feedback; update logged journal 
    const handleEdit = (journalItem) => {
        setEntryData(journalItem);
        handleDelete(journalItem);
        setShowModalWindow(false);
        navigate('/edit-entry');
    }
    //check entry type; change depth 1,2 to an array; bold questions for depth 3; make current day entries editable 
    return (
        <div className="mainJournal">
            <h2>Details for {formattedDate}</h2>
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
                                    <button className="editButton" type="button" onClick={() => handleEdit(item)}>Edit</button >}
                                <button className="deleteButton" type="button" onClick={() => handleDelete(item)}>Delete Session #{index + 1}</button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
