import { userMoods, userDepths, userJournalEntries } from '../common/userGlobals.js';
import { findUser } from '../user/findUser.js';

export default function calendarDetailedView(id, selectedDate) {

    const user = findUser(id);
    let journalData = [];
    
    if (!user) {
        return null;
    }

    const moodsForDate = userMoods.filter(moodEntry => 
        moodEntry.userId === user.userId && moodEntry.date === selectedDate
    );

    const depthsForDate = userDepths.filter(depthEntry => 
        depthEntry.userId === user.userId && depthEntry.date === selectedDate
    );

    const journalEntriesForDate = userJournalEntries.filter(journalEntry => 
        journalEntry.userId === user.userId && journalEntry.date === selectedDate
    );

    for(let index = 0; index < journalEntriesForDate.length; index++){

        journalData[index] = {
            mood: moodsForDate[index] || null,
            capacity: depthsForDate[index] || null,
            entry:  journalEntriesForDate[index]
        };
    }

    return journalData;
}
