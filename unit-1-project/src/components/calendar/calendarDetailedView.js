import { onyxUsers, userMoods, userDepths, userJournalEntries } from '../common/userGlobals.js';

export default function calendarDetailedView(id, selectedDate) {

    const user = onyxUsers.find(user => user.user_id === id);
    let journalData = [];
    
    if (!user) {
        console.log(`There isn't a user`);
        return null;

    }
    console.log(`Fetching data for user ID: ${user.user_id} named ${user.user_first} on date: ${selectedDate}`);

    const moodsForDate = userMoods.filter(moodEntry => 
        String(moodEntry.user_id) === String(user.user_id) && moodEntry.date === selectedDate
    );

    const depthsForDate = userDepths.filter(depthEntry => 
        String(depthEntry.user_id) === String(user.user_id) && depthEntry.date === selectedDate
    );

    const journalEntriesForDate = userJournalEntries.filter(journalEntry => 
        String(journalEntry.user_id) === String(user.user_id) && journalEntry.date === selectedDate
    );

    for(let index = 0; index < journalEntriesForDate.length; index++){

        journalData[index] = {
            Mood: moodsForDate[index] || null,
            Capacity: depthsForDate[index] || null,
            Entry:  journalEntriesForDate[index]
        };
    }

    return journalData;
}
