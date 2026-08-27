import { subscriptionData } from '../common/userGlobals.js';

export default function getSubscriptionInfo(id) {

    const userFound = subscriptionData.find(user => user.userId === id);

    if(userFound){
        return userFound;
    }
}