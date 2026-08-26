import { onyxUsers } from '../common/userGlobals.js';

export default function updateUser(id, firstName, lastName, email) {

    const userIndex = onyxUsers.findIndex(user => user.userId === id);
    //update everything minus user password
    if (userIndex !== -1) {
        onyxUsers[userIndex] = {
            ...onyxUsers[userIndex],
            userFirst: firstName,
            userLast: lastName,
            userEmail: email
        }
        return id;
    }
}