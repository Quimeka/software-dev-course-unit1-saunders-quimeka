import { contactUsData} from '../common/userGlobals.js';
import { getDate } from '../common/getTodaysDate.js';

export default function registerContactUs(id, message) {

    const number = contactUsData.length + 1;
    const date = getDate();
    

    const newMessage = {
        entryNumber: number,
        userId: id,
        date: date,
        userMessage: message
    };

    contactUsData.push(newMessage);
    return newMessage;
}