import { onyxUsers } from '../common/userGlobals.js';

export default function isEmailAvailable(email) {
    const emailFound = onyxUsers.find(user => user.userEmail === email);

    return !emailFound;
}
