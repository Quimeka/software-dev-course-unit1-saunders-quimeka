import { subscriptionData, onyxUsers, } from '../../../common/userGlobals.js';
import { getDate } from '../../../common/getTodaysDate.js';

export default function cancelSubscription(id) {

    const updateUserIndex = onyxUsers.findIndex(user => user.userId === id);

    if (updateUserIndex === -1) {
        return null;
    }

    onyxUsers[updateUserIndex] = {
        ...onyxUsers[updateUserIndex],
        userSubscribed: false
    };


    const userIndex = subscriptionData.findIndex(user => user.userId === id);

    const formattedDate = getDate();

    if (userIndex === -1) {
        return null;
    }

    subscriptionData[userIndex] = {
        ...subscriptionData[userIndex],
        enddate: formattedDate,
        status: "free",
        fee: "0.00"
    };

    return subscriptionData[userIndex];
}
