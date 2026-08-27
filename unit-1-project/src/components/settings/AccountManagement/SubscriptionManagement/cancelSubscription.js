import { subscriptionData } from '../../../common/userGlobals.js';
import { getDate } from '../../../common/getTodaysDate.js';

export default function cancelSubscription(id) {
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
