import { onyxUsers} from '../common/userGlobals.js';


export function findUser(id) {
    
    const user = onyxUsers.find(user => user.userId === id);     
    
    if (!user) {
        return null;
    }
    return user;
}

    
