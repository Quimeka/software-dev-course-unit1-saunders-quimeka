import { useState, useEffect } from 'react';
import setText from '../journal/setTextForEntries.js';
import { useNavigate } from 'react-router';
import JournalEntryEdit from './JournalEntryEdit.jsx';
import { loggedJournalEntries } from '../common/userGlobals.js';

export default function JournalReview({ currentUser, date, firstName }) {
    const navigate = useNavigate();

    const formattedDate = date.toISOString().substring(0, 10);

    const [year, month, day] = formattedDate.split('-');
    const formattedDateDisplay = `${month}-${day}-${year}`;

    const entryList = loggedJournalEntries.filter(entry => entry.userId === currentUser && entry.date === formattedDate);

    const currentDate = new Date().toISOString().substring(0, 10);

    const showEditButton = formattedDate === currentDate;

    return (
        <div className="mainJournal">
            <h2>Details for {formattedDateDisplay}</h2>
            <div className="modalJournalSection">
                {entryList.length === 0 ? (
                    <p>No records or journal entries for this day, {firstName}!</p>
                ) : (
                    entryList.map((item, index) => (
                        <div key={item.entry?.entry_id || index} className="journalEntryCard">
                            <h3>Session #{index + 1}</h3>
                            <p className="modalEntryData"><strong>Mood:</strong> {setText("mood", item.mood)}</p>
                            <p className="modalEntryData"><strong>Preference:</strong> {setText("depth", item.depth)}</p>

                            {/*Disclaimer: This was such a nightmare...and I still can't get it right. HELPNEEDEDAREA*/}
                            {item.entry.map && showEditButton && (
                                <div className="modalEntryDataTextResponses" style={{ whiteSpace: 'pre-line' }}>
                                    <p className="JournalHeader"><strong>Journal Entry:</strong></p>
                                    {item.entry.map((line, index) => (
                                        <p key={index}>
                                            {item.depth === "1" ? (<> {line} {<button className="editButton" type="button">Edit</button>} </>) :
                                                (index % 2 === 0 && item.depth !== "1" ? (<strong> <>{line}</></strong>) : (<> {line} {<button className="editButton" type="button">Edit</button>} </>))}
                                        </p>
                                    ))}
                                </div>
                            )}
                            {item.entry.map && !showEditButton && (
                                <div className="modalEntryDataTextResponses" style={{ whiteSpace: 'pre-line' }}>
                                    <p className="JournalHeader"><strong>Journal Entry:</strong></p>
                                    {item.entry.map((line, index) => (
                                        <p key={index}>
                                            {item.depth === "1" ? (<>{line}</>) :
                                                (index % 2 === 0 && item.depth !== "1" ? (<strong>{line}</strong>) : <>{line}</>)}
                                        </p>
                                    ))}
                                </div>
                            )}
                            <button className="deleteButton" type="button">Delete Session #{index + 1}</button>
                        </div>
                    )))}
            </div>
        </div>
    )
}