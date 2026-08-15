import { onyxUsers, idCounter } from '../common/userGlobals.js';


export function getUserFirstName(id) {

    const user = onyxUsers.find(user => user.user_id === id);
    
    if (!user) {
        return null;
    }
    
    return user.user_first;
}