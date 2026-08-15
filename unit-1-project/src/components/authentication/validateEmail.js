import { onyxUsers } from '../common/userGlobals.js';

export default function validateEmail(email) {
    const userFound = onyxUsers.find(user => user.user_email === email);

    if (userFound) {
        return false;
    }
    return true;
}
