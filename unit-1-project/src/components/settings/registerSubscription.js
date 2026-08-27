import { subscriptionData } from '../common/userGlobals.js';

export default function registerSubscription(id) {
    const userIndex = subscriptionData.findIndex(user => user.userId === id);

    const today = new Date().toISOString().substring(0, 10);
    const [year, month, day] = today.split('-');
    const formattedDate = `${month}-${day}-${year}`;

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
