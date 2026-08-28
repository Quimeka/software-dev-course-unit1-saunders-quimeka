import { loggedJournalEntries } from '../common/userGlobals.js';

export default function updateFullJournalEntry(entrydata, entryLog) {

    let formattedEntry;

    if (entrydata.depth !== "2") {
        formattedEntry = entryLog;
    } else {
        formattedEntry = entryLog.split('\n').filter(paragraph => paragraph.trim() !== '')
    }

    const entryIndex = loggedJournalEntries.findIndex(user => String(user.journalEntryNumber) === String(entrydata.journalEntryNumber));

    if (entryIndex !== -1) {
        loggedJournalEntries[entryIndex] = {
            ...loggedJournalEntries[entryIndex],
            entry: formattedEntry
        }
    }
}

