import { subscriptionData, onyxUsers } from '../../../common/userGlobals.js';
import { getDate } from '../../../common/getTodaysDate.js';

export default function registerSubscription(id) {

    const updateUserIndex = onyxUsers.findIndex(user => user.userId === id);
    
        if (updateUserIndex === -1) {
            return null;
        }
    
        onyxUsers[updateUserIndex] = {
            ...onyxUsers[updateUserIndex],
            userSubscribed: true
        };

    const userIndex = subscriptionData.findIndex(user => user.userId === id);

    const formattedDate = getDate();

    if (userIndex === -1) {
        const newSubscription = {
            userId: id,
            startdate: formattedDate,
            enddate: "",
            status: "premium",
            fee: "9.99"
        };
        subscriptionData.push(newSubscription);
        return newSubscription;
    }

    subscriptionData[userIndex] = {
        ...subscriptionData[userIndex],
        startdate: formattedDate,
        status: "premium",
        fee: "9.99"
    };

    return subscriptionData[userIndex];
}
