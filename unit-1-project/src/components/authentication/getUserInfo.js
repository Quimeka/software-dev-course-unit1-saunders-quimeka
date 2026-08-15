import { onyxUsers } from '../common/userGlobals.js';

export default function getUserInfo(id) {
    const userFound = onyxUsers.find(user => user.user_id === id);

    if (userFound) {
        return {
            user_id: userFound.user_id,
            user_first: userFound.user_first,
            user_last: userFound.user_last,
            user_email: userFound.user_email
        };
    }
    return null;
}
