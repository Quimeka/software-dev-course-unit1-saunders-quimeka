import { onyxUsers } from '../common/userGlobals.js';

export default function updateSubscription(id) {

    const userIndex = onyxUsers.findIndex(user => user.userId === id);

    if (userIndex !== -1) {
        onyxUsers[userIndex] = {
            ...onyxUsers[userIndex],
            userSubscribed: true
        }
        return true;
    }

    return false;
}