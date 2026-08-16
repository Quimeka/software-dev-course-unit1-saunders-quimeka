import { userDepths } from '../common/userGlobals.js';
import { findUser } from './findUser.js';
    

export default function registerUserDepth(id, depth){

    const currentDate = new Date();
    const user = findUser(id);
    
    if (!user) {
        return null;

    }

    const newDepthEntry = { 
        userId: id,
        depth: depth,
        date: currentDate.toISOString().substring(0, 10)
    };

    userDepths.push(newDepthEntry);
}

