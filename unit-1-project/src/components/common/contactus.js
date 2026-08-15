import { contactUsData} from '../common/userGlobals.js';

export default function contactUs(id, name, email, message) {

    const newMessage = {
        user_id: id,
        user_full_name: name,
        user_email: email,
        user_message: message
    };

    contactUsData.push(newMessage);
    console.log("Current Messages:", contactUsData);
}