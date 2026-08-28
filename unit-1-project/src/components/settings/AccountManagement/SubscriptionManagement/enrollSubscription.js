import { subscriptionData } from '../../../common/userGlobals.js';
import { getDate } from '../../../common/getTodaysDate.js';

export default function enrollSubscription(id) {
    
    const formattedDate = getDate();

    const newSubscription = {
        userId: id,
        startdate: formattedDate,
        enddate: "",
        status: "free",
        fee: "0.00"
    };
    subscriptionData.push(newSubscription)
}