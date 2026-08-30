import { onyxUsers, idCounter } from '../common/userGlobals.js';

export default function createUser(firstName, lastName, email, password) {
    const currentId = String(++idCounter.index);

    const first = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const last = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    const newUser = {
        userId: currentId,
        userFirst: first,
        userLast: last,
        userEmail: email,
        userPassword: password,
        userSubscribed: false
    };

    onyxUsers.push(newUser);

    return currentId;
}