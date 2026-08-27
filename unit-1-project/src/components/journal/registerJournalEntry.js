import { userJournalEntries } from '../common/userGlobals.js';
import { findUser } from '../user/findUser.js';
import { getDate } from '../common/getTodaysDate.js';


export default function registerJournalEntry(id, journalEntry) {

    const currentDate = getDate();
    const user = findUser(id);

    if (!user) {
        return null;
    }

    const newJournalEntry = {
        userId: id,
        date: currentDate,
        journalEntry: journalEntry
    };

    userJournalEntries.push(newJournalEntry);
}

