import { contactUsData} from '../common/userGlobals.js';

export default function contactUs(id, name, email, message) {

    const newMessage = {
        userId: id,
        userFullName: name,
        userEmail: email,
        userMessage: message
    };

    contactUsData.push(newMessage);
}