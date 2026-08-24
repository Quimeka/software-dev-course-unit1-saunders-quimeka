import { loggedJournalEntries } from '../common/userGlobals.js';
import { findUser } from '../user/findUser.js';


export default function registerFullJournalEntry(id, mood, depth, journalEntry) {

    const currentDate = new Date();
    const user = findUser(id);

    if (!user) {
        return null;
    }

    const lastEntry = loggedJournalEntries.findLast(entry => entry.userId === id);
    const lastNumber = lastEntry ? lastEntry.journalEntryNumber : 0;

    let formattedEntry;

    if (depth === "1" || depth === "3") {
        formattedEntry = journalEntry;

    }
    else if (depth === "2") {
        formattedEntry = journalEntry.split('\n').filter(paragraph => paragraph.trim() !== '')
    }

    const newJournalEntry = {
        userId: id,
        journalEntryNumber: lastNumber + 1,
        date: currentDate.toISOString().substring(0, 10),
        mood: mood,
        depth: depth,
        entry: formattedEntry
    };
    console.log('Journal entry was set to:', journalEntry);
    loggedJournalEntries.push(newJournalEntry);
    console.log('Journal entry registered:', newJournalEntry);
    console.log(loggedJournalEntries);
}

