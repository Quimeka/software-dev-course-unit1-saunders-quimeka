import { onyxUsers } from '../common/userGlobals.js';

export default function updateUserPassword(id, password) {

    const userIndex = onyxUsers.findIndex(user => user.userId === id);
    //update user password only
    if (userIndex !== -1) {
        onyxUsers[userIndex] = {
            ...onyxUsers[userIndex],
            userPassword: password
        }
        return id;
    }
}