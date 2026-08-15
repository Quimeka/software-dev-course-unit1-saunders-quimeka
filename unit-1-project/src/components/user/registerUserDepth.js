import { onyxUsers, userDepths } from '../common/userGlobals.js';
import UserDepth from './UserDepth.jsx';
import { getUserFirstName } from './getUserName.js';
    

export default function registerUserDepth(id, depth){

    const currentDate = new Date();
    const user = onyxUsers.find(user => user.user_id === id);
    
    if (!user) {
        console.log(`There isn't a user`);
        return null;

    }

    const newDepthEntry = { 
        user_id: id,
        depth: depth,
        date: currentDate.toISOString().substring(0, 10)
    };

    userDepths.push(newDepthEntry);
    console.log(`Depth entry for ` + getUserFirstName(user) + ` registered:`, newDepthEntry);
    console.log(userDepths);
}

