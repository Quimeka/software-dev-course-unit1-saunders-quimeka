import { onyxUsers, loggedJournalEntries } from '../common/userGlobals.js';

export default function deleteUser(id) {

    //filter out current user requesting account deletion, repopulate log)
    const newloggedJournalEntries = loggedJournalEntries.filter(entry => entry.userId !== id);
    loggedJournalEntries.length = 0; 
    loggedJournalEntries.push(...newloggedJournalEntries);
    
    const userIndex = onyxUsers.findIndex(user => user.userId === id);

    if (userIndex !== -1) {
        onyxUsers.splice(userIndex, 1);
        return true;
    }
    return false;
}