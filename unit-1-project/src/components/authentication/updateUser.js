import { onyxUsers } from '../common/userGlobals.js';

export default function updateUser(id, firstName, lastName, email) {

    const first = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const last = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    const userIndex = onyxUsers.findIndex(user => user.userId === id);
    //update everything minus user password
    if (userIndex !== -1) {
        onyxUsers[userIndex] = {
            ...onyxUsers[userIndex],
            userFirst: first,
            userLast: last,
            userEmail: email
        }
        return id;
    }
}