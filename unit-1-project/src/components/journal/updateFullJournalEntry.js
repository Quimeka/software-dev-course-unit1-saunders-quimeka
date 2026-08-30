import { loggedJournalEntries } from '../common/userGlobals.js';

export default function updateFullJournalEntry(entrydata, entryLog) {
    let formattedEntry;

    if (String(entrydata.depth) === "1" || String(entrydata.depth) === "3") {
        formattedEntry = entryLog;
    } else {
        formattedEntry = entryLog.split('\n').filter(paragraph => paragraph.trim() !== '');
    }

    const entryIndex = loggedJournalEntries.findIndex(item =>
        String(item.journalEntryNumber) === String(entrydata.journalEntryNumber) &&
        String(item.userId) === String(entrydata.userId)
    );

    if (entryIndex !== -1) {
        loggedJournalEntries[entryIndex] = {
            ...loggedJournalEntries[entryIndex],
            entry: formattedEntry
        };
        return [...loggedJournalEntries];
    }
    return loggedJournalEntries;
}
