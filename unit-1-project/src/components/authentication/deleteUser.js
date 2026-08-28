import { onyxUsers, loggedJournalEntries, subscriptionData } from '../common/userGlobals.js';

export default function deleteUser(id) {
    //Filter and update Journal Entries
    const newJournalEntries = loggedJournalEntries.filter(entry => entry.userId !== id);
    loggedJournalEntries.length = 0;
    loggedJournalEntries.push(...newJournalEntries);

    //Filter and update Users
    const remainingUsers = onyxUsers.filter(user => user.userId !== id);
    onyxUsers.length = 0;
    onyxUsers.push(...remainingUsers);

    //Filter and update Subscriptions
    const remainingSubscribers = subscriptionData.filter(user => user.userId !== id);
    subscriptionData.length = 0;
    subscriptionData.push(...remainingSubscribers);

    //Confirm removal of user from all arrays
    const inJournals = loggedJournalEntries.some(entry => entry.userId === id);
    const inUsers = onyxUsers.some(user => user.userId === id);
    const inSubs = subscriptionData.some(user => user.userId === id);

    return !inJournals && !inUsers && !inSubs;
}
