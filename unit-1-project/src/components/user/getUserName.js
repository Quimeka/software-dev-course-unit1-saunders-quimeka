import { findUser } from './findUser.js';


export function getUserFirstName(id) {

    const user = findUser(id);
    
    if (!user) {
        return null;
    }
    
    return user.userFirst;
}