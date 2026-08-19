import { contactUsData} from '../common/userGlobals.js';

export default function registerContactUs(id, message) {

    const number = contactUsData.length + 1;
    

    const newMessage = {
        entryNumber: number,
        userId: id,
        date: new Date().toISOString().substring(0, 10),
        userMessage: message
    };

    contactUsData.push(newMessage);
    return newMessage;
}