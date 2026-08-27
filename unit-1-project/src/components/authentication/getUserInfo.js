import { onyxUsers } from '../common/userGlobals.js';

export default function getUserInfo(id) {
    const userFound = onyxUsers.find(user => user.userId === id);

    if (userFound) {
        return {
            userId: userFound.userId,
            userFirst: userFound.userFirst,
            userLast: userFound.userLast,
            userEmail: userFound.userEmail,
            userPassword: userFound.userPassword,
            userSubscribed: userFound.userSubscribed
        };
    }
    return null;
}
