import { userMoods } from '../common/userGlobals.js';
import { findUser } from './findUser.js';


export default function registerUserMood(id, mood){

    const currentDate = new Date();
    const user = findUser(id);
    
    if (!user) {
        return null;
    }

    const newMoodEntry = { 
        userId: id,
        mood: mood,
        date: currentDate.toISOString().substring(0, 10)
    };

    userMoods.push(newMoodEntry);
}

