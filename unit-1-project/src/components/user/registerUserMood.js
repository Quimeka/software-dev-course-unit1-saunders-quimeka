import { onyxUsers, userMoods } from '../common/userGlobals.js';
import UserMood from './UserMood.jsx';
import { getUserFirstName } from './getUserName.js';


export default function registerUserMood(id, mood){

    const currentDate = new Date();
    const user = onyxUsers.find(user => user.user_id === id);
    
    if (!user) {
        console.log(`There isn't a user`);
        return null;

    }

    const newMoodEntry = { 
        user_id: id,
        mood: mood,
        date: currentDate.toISOString().substring(0, 10)
    };

    userMoods.push(newMoodEntry);
    console.log(`Mood entry for ` + getUserFirstName(user) + ` registered:`, newMoodEntry);
    console.log(userMoods);
}

