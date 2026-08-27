import { onyxUsers } from '../common/userGlobals.js';

export default function updateSubscription(id) {
    const user = onyxUsers.find(user => user.userId === id);

    if (user) {
        user.userSubscribed = !user.userSubscribed;
        return user.userSubscribed;
    }
}
