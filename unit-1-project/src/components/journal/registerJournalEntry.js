import { userJournalEntries } from '../common/userGlobals.js';
import { findUser } from '../user/findUser.js';


export default function registerJournalEntry(id, journalEntry) {

    const currentDate = new Date();
    const user = findUser(id);

    if (!user) {
        return null;
    }

    const newJournalEntry = {
        userId: id,
        date: currentDate.toISOString().substring(0, 10),
        journalEntry: journalEntry
    };

    userJournalEntries.push(newJournalEntry);
}

