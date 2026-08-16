import { onyxUsers } from '../common/userGlobals.js';

export default function verifyUserLogin(email, password) {
    const userFound = onyxUsers.find(user => user.userEmail === email && user.userPassword === password);

    if (!userFound) {
        return null;
    }

    return userFound;
}
