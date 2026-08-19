import { loggedJournalEntries } from '../common/userGlobals.js';
import { findUser } from '../user/findUser.js';


export default function registerFullJournalEntry(id, mood, depth, journalEntry) {

    const currentDate = new Date();
    const user = findUser(id);

    if (!user) {
        return null;
    }

    const foundUserEntry = loggedJournalEntries.findLast(entry => entry.userId === id && entry.date === currentDate.toISOString().substring(0, 10));

    const newJournalEntry = {
        userId: id,
        journalEntryNumber: foundUserEntry ? foundUserEntry.journalEntryNumber + 1 : 1,
        date: currentDate.toISOString().substring(0, 10),
        mood: mood,
        depth: depth,
        entry: journalEntry.split('\n').filter(paragraph => paragraph.trim() !== '')
    };

    loggedJournalEntries.push(newJournalEntry);
    console.log('Journal entry registered:', newJournalEntry);
    console.log(loggedJournalEntries);
}

