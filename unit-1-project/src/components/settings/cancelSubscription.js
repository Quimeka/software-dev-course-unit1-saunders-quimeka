import { subscriptionData } from '../common/userGlobals.js';

export default function cancelSubscription(id) {
    const userIndex = subscriptionData.findIndex(user => user.userId === id);

    const today = new Date().toISOString().substring(0, 10);
    const [year, month, day] = today.split('-');
    const formattedDate = `${month}-${day}-${year}`;

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
