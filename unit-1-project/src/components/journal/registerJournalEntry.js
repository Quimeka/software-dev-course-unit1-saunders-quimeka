import { onyxUsers, userJournalEntries} from '../common/userGlobals.js';
import { getUserFirstName } from '../user/getUserName.js';
    

export default function registerJournalEntry(id, journalEntry){

    const currentDate = new Date();
    const user = onyxUsers.find(user => user.user_id === id);
    
    if (!user) {
        console.log(`There isn't a user`);
        return null;
    }

    const newJournalEntry = { 
        user_id: id,
        date: currentDate.toISOString().substring(0, 10),
        journal_entry: journalEntry,

    };

    userJournalEntries.push(newJournalEntry);
    console.log(`Journal entry for ` + getUserFirstName(user) + ` registered:`, newJournalEntry);
    console.log(userJournalEntries);
}

