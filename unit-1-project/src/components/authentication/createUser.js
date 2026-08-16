import { onyxUsers, idCounter } from '../common/userGlobals.js';

export default function createUser(firstName, lastName, email, password) {
    const currentId = String(++idCounter.index);

    const newUser = {
        userId: currentId,
        userFirst: firstName,
        userLast: lastName,
        userEmail: email,
        userPassword: password
    };

    onyxUsers.push(newUser);

    return currentId;
}