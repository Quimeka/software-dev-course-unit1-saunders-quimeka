import { onyxUsers } from '../common/userGlobals.js';

export default function validateUser(email, password) {
    const userFound = onyxUsers.find(user => user.user_email === email && user.user_password === password);

    if (userFound) {
        return {
            user_id: userFound.user_id,
            user_first: userFound.user_first,
        };
    }
    return null;
}
